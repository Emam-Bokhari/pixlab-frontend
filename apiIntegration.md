# 📸 aiSnapStudio - API Integration Documentation

A complete reference guide for frontend agents and developers integrating with the **aiSnapStudio** backend service.

---

## 📑 Table of Contents
1. [General Information & Environment](#1-general-information--environment)
2. [Global Enums & Constants](#2-global-enums--constants)
3. [File Upload Limits & Formats](#3-file-upload-limits--formats)
4. [Response Architecture (JSON vs Binary Mode)](#4-response-architecture-json-vs-binary-mode)
5. [API Endpoints Overview](#5-api-endpoints-overview)
6. [Detailed API Specifications](#6-detailed-api-specifications)
   - [6.1 Health Check (Root)](#61-health-check-root)
   - [6.2 Submit Support Request](#62-submit-support-request)
   - [6.3 Background Removal](#63-background-removal)
   - [6.4 Reduce / Compress Image Size](#64-reduce--compress-image-size)
   - [6.5 Resize Image Dimensions](#65-resize-image-dimensions)
   - [6.6 Upscale Image Resolution](#66-upscale-image-resolution)
7. [Error Response Format](#7-error-response-format)
8. [Frontend TypeScript Interfaces](#8-frontend-typescript-interfaces)
9. [Frontend Integration Examples (Axios / Fetch)](#9-frontend-integration-examples-axios--fetch)

---

## 1. General Information & Environment

| Property | Value | Description |
|---|---|---|
| **Base API URL** | `http://localhost:5000/api/v1` | Prefix for all v1 resource routes |
| **Health Check URL** | `http://localhost:5000/` | Root server status check |
| **CORS** | Enabled (`*`) | Cross-Origin Resource Sharing is enabled |
| **Exposed Headers** | Enabled | Custom headers (`X-Original-*`, `X-Current-*`, etc.) are exposed |

---

## 2. Global Enums & Constants

### 2.1 Enums
| Enum Name | Key | Value | Description |
|---|---|---|---|
| `SUPPORT_STATUS` | `OPEN` | `"OPEN"` | Default status for new support tickets |
| | `IN_PROGRESS` | `"IN_PROGRESS"` | Ticket under review |
| | `RESOLVED` | `"RESOLVED"` | Ticket resolved |
| `RESIZE_FIT` *(Backend fixed)* | `COVER` | `"cover"` | Crops to cover both provided dimensions (Default) |
| | `FILL` | `"fill"` | Ignores aspect ratio, stretches to fill |
| | `INSIDE` | `"inside"` | Preserves aspect ratio, fits inside dimensions |
| | `OUTSIDE` | `"outside"` | Preserves aspect ratio, fits outside dimensions |
| `RESIZE_CROP_STRATEGY` *(Backend fixed)* | `CENTRE` | `"centre"` | Crop from center |
| | `ATTENTION` | `"attention"` | Focus on features with highest luminance/frequency (Default) |
| | `ENTROPY` | `"entropy"` | Focus on highest Shannon entropy |

---

## 3. File Upload Limits & Formats

All image upload endpoints use `multipart/form-data` with the file input field name **`image`**.

| Endpoint | Max File Size | Allowed MIME Types | Allowed Extensions |
|---|---|---|---|
| **`/api/v1/bg-remove`** | 50 MB | `image/png`, `image/jpeg`, `image/webp`, `image/bmp`, `image/tiff`, `image/gif`, `image/avif` | `.png`, `.jpg`, `.jpeg`, `.webp`, `.bmp`, `.tiff`, `.gif`, `.avif` |
| **`/api/v1/reduce`** | 50 MB | `image/png`, `image/jpeg`, `image/bmp`, `image/webp` | `.png`, `.jpg`, `.jpeg`, `.bmp`, `.webp` |
| **`/api/v1/resize`** | 25 MB | `image/png`, `image/jpeg`, `image/webp`, `image/gif`, `image/tiff`, `image/avif` | `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.tiff`, `.avif` |
| **`/api/v1/upscales`** | 20 MB | `image/png`, `image/jpeg`, `image/bmp`, `image/webp`, `image/tiff`, `image/avif` | `.png`, `.jpg`, `.jpeg`, `.bmp`, `.webp`, `.tiff`, `.avif` |

---

## 4. Response Architecture (JSON vs Binary Mode)

For all image processing endpoints (`bg-remove`, `reduce`, `resize`, `upscales`), the backend supports **two response modes**:

### Mode A: JSON Mode (Default)
- **When used**: Normal API call without query parameters.
- **Content-Type**: `application/json`
- **Output**: Returns JSON containing metadata for both `original` and `current` (processed) images, including Base64 Data URLs (`data:<mime>;base64,...`) for direct preview in `<img>` tags without additional downloads.

### Mode B: Direct Binary / File Download Mode
- **When used**: Add either query parameter: `?type=binary` OR `?download=true`
- **Content-Type**: Corresponding image MIME (e.g., `image/png`, `image/jpeg`, `image/webp`)
- **Content-Disposition**: `attachment; filename="<filename>.<ext>"`
- **Response Headers**: Image metadata is returned in response headers (exposed to browser via `Access-Control-Expose-Headers`):
  - `X-Original-Width`, `X-Original-Height`, `X-Original-Size-KB`, `X-Original-Size-MB`
  - `X-<Prefix>-Width`, `X-<Prefix>-Height`, `X-<Prefix>-Size-KB`, `X-<Prefix>-Size-MB` *(where Prefix is `Current`, `Reduced`, `Resized`, or `Upscaled`)*
  - Route-specific extra headers (e.g. `X-Reduction-Percent`, `X-Scale`, `X-Background-Color`)

---

## 5. API Endpoints Overview

| Method | Endpoint | Content-Type | Response Type | Purpose |
|---|---|---|---|---|
| `GET` | `/` | None | `text/plain` | Server health check |
| `POST` | `/api/v1/supports` | `application/json` | `application/json` | Send customer support / feedback message |
| `POST` | `/api/v1/bg-remove` | `multipart/form-data` | `application/json` or Binary | Remove image background or replace with solid color |
| `POST` | `/api/v1/reduce` | `multipart/form-data` | `application/json` or Binary | Compress image to target size in KB |
| `POST` | `/api/v1/resize` | `multipart/form-data` | `application/json` or Binary | Resize image dimensions (width × height px) |
| `POST` | `/api/v1/upscales` | `multipart/form-data` | `application/json` or Binary | Enhance and upscale image resolution (1x - 4x) |

---

## 6. Detailed API Specifications

---

### 6.1 Health Check (Root)

- **Method**: `GET`
- **URL**: `/`
- **Description**: Verifies if the backend server is running.
- **Request Headers / Body**: None.
- **Response**:
  - **Status**: `200 OK`
  - **Body**: `"Server is running..."`

---

### 6.2 Submit Support Request

- **Method**: `POST`
- **URL**: `/api/v1/supports`
- **Description**: Accepts contact/support form submissions, queues an email notification (or direct fallback), and logs the inquiry.
- **Content-Type**: `application/json`

#### Request Body Schema
| Field | Type | Required | Default | Validation & Constraints |
|---|---|---|---|---|
| `name` | `string` | ✅ Yes | - | Min: 2 characters, Max: 100 characters |
| `email` | `string` | ✅ Yes | - | Valid email format, automatically converted to lowercase |
| `subject` | `string` | ✅ Yes | - | Min: 5 characters, Max: 150 characters |
| `message` | `string` | ✅ Yes | - | Min: 10 characters, Max: 2000 characters |
| `status` | `enum` (`SUPPORT_STATUS`) | ❌ No | `"OPEN"` | Allowed: `"OPEN"`, `"IN_PROGRESS"`, `"RESOLVED"` |
| `isDeleted` | `boolean` | ❌ No | `false` | Soft-delete flag |

#### Example Request Payload
```json
{
  "name": "Sarah Connor",
  "email": "sarah@example.com",
  "subject": "Question about image upscale resolution",
  "message": "Hello, does the upscale service preserve transparency on PNGs?",
  "status": "OPEN"
}
```

#### Success Response (`200 OK`)
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Support message sent successfully",
  "data": {
    "name": "Sarah Connor",
    "email": "sarah@example.com",
    "subject": "Question about image upscale resolution",
    "message": "Hello, does the upscale service preserve transparency on PNGs?",
    "sentAt": "2026-11-21T05:50:00.000Z"
  }
}
```

---

### 6.3 Background Removal

- **Method**: `POST`
- **URL**: `/api/v1/bg-remove`
- **Description**: Removes background using neural background removal. If `bgColor` is specified, fills background with that solid color; otherwise, produces a transparent PNG.
- **Content-Type**: `multipart/form-data`

#### Query Parameters (Optional)
| Parameter | Type | Required | Values | Description |
|---|---|---|---|---|
| `type` | `string` | ❌ No | `"binary"` | Returns binary image buffer instead of JSON |
| `download` | `string` | ❌ No | `"true"` | Triggers browser attachment download |

#### Request FormData
| Key | Type | Required | Constraints / Notes |
|---|---|---|---|
| `image` | `File` (Binary) | ✅ Yes | Max size: 50MB. Allowed: PNG, JPEG, JPG, WEBP, BMP, TIFF, GIF, AVIF |
| `bgColor` | `string` | ❌ No | Hex color code (e.g., `"#FFFFFF"`, `"#1E40AF"`, `"FF0000"`, `"#FFF"`). Optional. |

#### Success Response 1: Default JSON Mode (`200 OK`)
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Background removed successfully",
  "data": {
    "original": {
      "format": "jpeg",
      "widthPx": 1200,
      "heightPx": 800,
      "sizeBytes": 320000,
      "sizeKB": 312.5,
      "sizeMB": 0.31,
      "imageUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
    },
    "current": {
      "format": "png",
      "widthPx": 1200,
      "heightPx": 800,
      "sizeBytes": 280000,
      "sizeKB": 273.44,
      "sizeMB": 0.27,
      "imageUrl": "data:image/png;base64,iVBORw0KGgo..."
    },
    "bgColor": "FFFFFF"
  }
}
```

#### Success Response 2: Binary Mode (`?type=binary` or `?download=true`)
- **Status**: `200 OK`
- **Content-Type**: `image/png`
- **Content-Disposition**: `attachment; filename="bg-removed.png"`
- **Response Headers**:
  | Header Key | Example Value | Description |
  |---|---|---|
  | `X-Original-Width` | `1200` | Original width in pixels |
  | `X-Original-Height` | `800` | Original height in pixels |
  | `X-Original-Size-KB` | `312.5` | Original size in KB |
  | `X-Original-Size-MB` | `0.31` | Original size in MB |
  | `X-Current-Width` | `1200` | Processed width in pixels |
  | `X-Current-Height` | `800` | Processed height in pixels |
  | `X-Current-Size-KB` | `273.44` | Processed size in KB |
  | `X-Current-Size-MB` | `0.27` | Processed size in MB |
  | `X-Background-Color` | `FFFFFF` | Hex color applied (if provided) |

---

### 6.4 Reduce / Compress Image Size

- **Method**: `POST`
- **URL**: `/api/v1/reduce`
- **Description**: Compresses an image to fit within a specified maximum target size in KB using adaptive scaling and quality adjustments.
- **Content-Type**: `multipart/form-data`

#### Query Parameters (Optional)
| Parameter | Type | Required | Values | Description |
|---|---|---|---|---|
| `type` | `string` | ❌ No | `"binary"` | Returns binary image buffer instead of JSON |
| `download` | `string` | ❌ No | `"true"` | Triggers browser attachment download |

#### Request FormData
| Key | Type | Required | Constraints / Notes |
|---|---|---|---|
| `image` | `File` (Binary) | ✅ Yes | Max size: 50MB. Allowed: PNG, JPEG, JPG, BMP, WEBP |
| `targetSizeKb` | `number` / `string` | ✅ Yes | Target size in KB. Must be a positive number (`> 0`). e.g., `100` |

#### Success Response 1: Default JSON Mode (`200 OK`)
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Image reduced successfully",
  "data": {
    "original": {
      "format": "jpeg",
      "widthPx": 2560,
      "heightPx": 1440,
      "sizeBytes": 2450000,
      "sizeKB": 2392.58,
      "sizeMB": 2.336,
      "imageUrl": "data:image/jpeg;base64,..."
    },
    "current": {
      "format": "jpeg",
      "widthPx": 1280,
      "heightPx": 720,
      "sizeBytes": 98000,
      "sizeKB": 95.7,
      "sizeMB": 0.093,
      "imageUrl": "data:image/jpeg;base64,..."
    },
    "targetSizeKb": 100,
    "reductionPercentage": 96.0
  }
}
```

#### Success Response 2: Binary Mode (`?type=binary` or `?download=true`)
- **Status**: `200 OK`
- **Content-Type**: `image/jpeg` (or output format)
- **Content-Disposition**: `attachment; filename="reduced.jpg"`
- **Response Headers**:
  | Header Key | Example Value | Description |
  |---|---|---|
  | `X-Original-Width` | `2560` | Original width |
  | `X-Original-Height` | `1440` | Original height |
  | `X-Original-Size-KB` | `2392.58` | Original size in KB |
  | `X-Original-Size-MB` | `2.336` | Original size in MB |
  | `X-Reduced-Width` | `1280` | Reduced width |
  | `X-Reduced-Height` | `720` | Reduced height |
  | `X-Reduced-Size-KB` | `95.7` | Reduced size in KB |
  | `X-Reduced-Size-MB` | `0.093` | Reduced size in MB |
  | `X-Reduction-Percent` | `96` | Compression percentage |
  | `X-Target-Size-KB` | `100` | Target requested size in KB |

---

### 6.5 Resize Image Dimensions

- **Method**: `POST`
- **URL**: `/api/v1/resize`
- **Description**: Resizes an image to specified width and height in pixels using Lanczos3 kernel and attention-based cropping.
- **Content-Type**: `multipart/form-data`

#### Query Parameters (Optional)
| Parameter | Type | Required | Values | Description |
|---|---|---|---|---|
| `type` | `string` | ❌ No | `"binary"` | Returns binary image buffer instead of JSON |
| `download` | `string` | ❌ No | `"true"` | Triggers browser attachment download |

#### Request FormData
| Key | Type | Required | Constraints / Notes |
|---|---|---|---|
| `image` | `File` (Binary) | ✅ Yes | Max size: 25MB (`MAX_INPUT_FILE_SIZE_MB = 25`). Allowed: PNG, JPEG, JPG, WEBP, GIF, TIFF, AVIF |
| `width` | `number` / `string` | ✅ Yes | Target width in pixels. Integer between `8` and `8000` |
| `height` | `number` / `string` | ✅ Yes | Target height in pixels. Integer between `8` and `8000` |

#### Success Response 1: Default JSON Mode (`200 OK`)
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Image resized successfully",
  "data": {
    "original": {
      "format": "png",
      "widthPx": 1920,
      "heightPx": 1080,
      "sizeBytes": 850000,
      "sizeKB": 830.08,
      "sizeMB": 0.81,
      "imageUrl": "data:image/png;base64,..."
    },
    "current": {
      "format": "png",
      "widthPx": 800,
      "heightPx": 600,
      "sizeBytes": 320000,
      "sizeKB": 312.5,
      "sizeMB": 0.31,
      "imageUrl": "data:image/png;base64,..."
    }
  }
}
```

#### Success Response 2: Binary Mode (`?type=binary` or `?download=true`)
- **Status**: `200 OK`
- **Content-Type**: `image/png` (matching output format)
- **Content-Disposition**: `attachment; filename="resized.png"`
- **Response Headers**:
  | Header Key | Example Value | Description |
  |---|---|---|
  | `X-Original-Width` | `1920` | Original width |
  | `X-Original-Height` | `1080` | Original height |
  | `X-Original-Size-KB` | `830.08` | Original size in KB |
  | `X-Original-Size-MB` | `0.81` | Original size in MB |
  | `X-Resized-Width` | `800` | New width |
  | `X-Resized-Height` | `600` | New height |
  | `X-Resized-Size-KB` | `312.5` | New size in KB |
  | `X-Resized-Size-MB` | `0.31` | New size in MB |

---

### 6.6 Upscale Image Resolution

- **Method**: `POST`
- **URL**: `/api/v1/upscales`
- **Description**: Upscales an image by a multiplier factor (1x to 4x) using Lanczos3 interpolation with unsharp masking for enhanced clarity.
- **Content-Type**: `multipart/form-data`

#### Query Parameters (Optional)
| Parameter | Type | Required | Values | Description |
|---|---|---|---|---|
| `type` | `string` | ❌ No | `"binary"` | Returns binary image buffer instead of JSON |
| `download` | `string` | ❌ No | `"true"` | Triggers browser attachment download |

#### Request FormData
| Key | Type | Required | Constraints / Notes |
|---|---|---|---|
| `image` | `File` (Binary) | ✅ Yes | Max size: 20MB. Allowed: PNG, JPEG, JPG, BMP, WEBP, TIFF, AVIF |
| `scale` | `number` / `string` | ❌ No | Multiplier factor between `1` and `4`. Defaults to `2` if omitted or out of range. |

#### Success Response 1: Default JSON Mode (`200 OK`)
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Image upscaled successfully",
  "data": {
    "original": {
      "format": "png",
      "widthPx": 400,
      "heightPx": 300,
      "sizeBytes": 120000,
      "sizeKB": 117.19,
      "sizeMB": 0.11,
      "imageUrl": "data:image/png;base64,..."
    },
    "current": {
      "format": "png",
      "widthPx": 800,
      "heightPx": 600,
      "sizeBytes": 450000,
      "sizeKB": 439.45,
      "sizeMB": 0.43,
      "imageUrl": "data:image/png;base64,..."
    },
    "scale": 2,
    "increase": {
      "widthPercent": 100,
      "heightPercent": 100,
      "sizeBytesPercent": 275,
      "sizeMBDiff": 0.32
    }
  }
}
```

#### Success Response 2: Binary Mode (`?type=binary` or `?download=true`)
- **Status**: `200 OK`
- **Content-Type**: `image/png` (matching output format)
- **Content-Disposition**: `attachment; filename="upscaled.png"`
- **Response Headers**:
  | Header Key | Example Value | Description |
  |---|---|---|
  | `X-Original-Width` | `400` | Original width |
  | `X-Original-Height` | `300` | Original height |
  | `X-Original-Size-KB` | `117.19` | Original size in KB |
  | `X-Original-Size-MB` | `0.11` | Original size in MB |
  | `X-Upscaled-Width` | `800` | Upscaled width |
  | `X-Upscaled-Height` | `600` | Upscaled height |
  | `X-Upscaled-Size-KB` | `439.45` | Upscaled size in KB |
  | `X-Upscaled-Size-MB` | `0.43` | Upscaled size in MB |
  | `X-Scale` | `2` | Applied scale factor |
  | `X-Width-Increase-Percent` | `100` | Percent width growth |
  | `X-Height-Increase-Percent` | `100` | Percent height growth |
  | `X-Size-Increase-Percent` | `275` | Percent byte growth |
  | `X-Size-MB-Diff` | `0.32` | Difference in MB |

---

## 7. Error Response Format

All validation errors and unhandled exceptions follow a unified standard JSON schema:

```json
{
  "success": false,
  "message": "Validation Error",
  "statusCode": 400,
  "error": [
    {
      "path": "email",
      "message": "Invalid email format"
    }
  ],
  "stack": null
}
```

### Common HTTP Status Codes
| Status Code | Reason | Example Occurrences |
|---|---|---|
| `400 Bad Request` | Missing field, invalid format, or boundary violation | `No image file provided`, `targetSizeKb must be a positive number`, `width/height must be integers >= 8px`, `Invalid background color hex format` |
| `404 Not Found` | Route or resource does not exist | Invalid path or missing URL prefix |
| `500 Internal Server Error` | Unexpected backend error | Processing crash or filesystem write issue |

---

## 8. Frontend TypeScript Interfaces

Copy and paste these interfaces into your frontend project (e.g., `src/types/api.ts`):

```typescript
export enum SUPPORT_STATUS {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED',
}

export interface ApiSuccessResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  statusCode: number;
  message: string;
  error: Array<{ path: string | number; message: string }>;
  stack?: string | null;
}

export interface ImageDimensionInfo {
  widthPx: number;
  heightPx: number;
  sizeBytes: number;
  sizeKB: number;
  sizeMB: number;
  format: string;
}

export interface ImageDetailsWithData extends ImageDimensionInfo {
  imageUrl: string; // Base64 Data URL (e.g. data:image/png;base64,...)
}

// 1. Support
export interface SupportPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  status?: SUPPORT_STATUS;
  isDeleted?: boolean;
}

export interface SupportResponseData {
  name: string;
  email: string;
  subject: string;
  message: string;
  sentAt: string;
}

// 2. Background Removal
export interface BgRemoveResponseData {
  original: ImageDetailsWithData;
  current: ImageDetailsWithData;
  bgColor?: string;
}

// 3. Reduce Image
export interface ReduceResponseData {
  original: ImageDetailsWithData;
  current: ImageDetailsWithData;
  targetSizeKb: number;
  reductionPercentage: number;
}

// 4. Resize Image
export interface ResizeResponseData {
  original: ImageDetailsWithData;
  current: ImageDetailsWithData;
}

// 5. Upscale Image
export interface UpscaleIncreaseInfo {
  widthPercent: number;
  heightPercent: number;
  sizeBytesPercent: number;
  sizeMBDiff: number;
}

export interface UpscaleResponseData {
  original: ImageDetailsWithData;
  current: ImageDetailsWithData;
  scale: number;
  increase: UpscaleIncreaseInfo;
}
```

---

## 9. Frontend Integration Examples (Axios / Fetch)

### Axios API Client Service (`src/services/apiService.ts`)

```typescript
import axios from 'axios';
import {
  ApiSuccessResponse,
  BgRemoveResponseData,
  ReduceResponseData,
  ResizeResponseData,
  SupportPayload,
  SupportResponseData,
  UpscaleResponseData,
} from '../types/api';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1',
});

// 1. Send Support Message
export const sendSupportMessage = async (payload: SupportPayload) => {
  const { data } = await apiClient.post<ApiSuccessResponse<SupportResponseData>>(
    '/supports',
    payload
  );
  return data;
};

// 2. Remove Background (JSON Preview Mode)
export const removeBackground = async (imageFile: File, bgColor?: string) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  if (bgColor) formData.append('bgColor', bgColor);

  const { data } = await apiClient.post<ApiSuccessResponse<BgRemoveResponseData>>(
    '/bg-remove',
    formData
  );
  return data;
};

// 3. Reduce Image Size
export const reduceImageSize = async (imageFile: File, targetSizeKb: number) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('targetSizeKb', targetSizeKb.toString());

  const { data } = await apiClient.post<ApiSuccessResponse<ReduceResponseData>>(
    '/reduce',
    formData
  );
  return data;
};

// 4. Resize Image Dimensions
export const resizeImage = async (imageFile: File, width: number, height: number) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('width', width.toString());
  formData.append('height', height.toString());

  const { data } = await apiClient.post<ApiSuccessResponse<ResizeResponseData>>(
    '/resize',
    formData
  );
  return data;
};

// 5. Upscale Image Resolution
export const upscaleImage = async (imageFile: File, scale: number = 2) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('scale', scale.toString());

  const { data } = await apiClient.post<ApiSuccessResponse<UpscaleResponseData>>(
    '/upscales',
    formData
  );
  return data;
};

// 6. Direct Binary Download (Generic Helper for any image tool)
export const downloadProcessedImage = async (
  endpoint: '/bg-remove' | '/reduce' | '/resize' | '/upscales',
  formData: FormData,
  defaultFilename: string = 'processed-image.png'
) => {
  const response = await apiClient.post(`${endpoint}?download=true`, formData, {
    responseType: 'blob',
  });

  // Extract filename from header if available
  const disposition = response.headers['content-disposition'];
  let filename = defaultFilename;
  if (disposition && disposition.includes('filename=')) {
    const match = disposition.match(/filename="?([^"]+)"?/);
    if (match?.[1]) filename = match[1];
  }

  // Trigger browser download
  const blobUrl = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = blobUrl;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(blobUrl);
};
```
