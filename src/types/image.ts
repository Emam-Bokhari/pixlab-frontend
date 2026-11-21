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

// 1. Background Removal
export interface BgRemoveResponseData {
  original: ImageDetailsWithData;
  current: ImageDetailsWithData;
  bgColor?: string;
}

// 2. Reduce Image Size
export interface ReduceResponseData {
  original: ImageDetailsWithData;
  current: ImageDetailsWithData;
  targetSizeKb: number;
  reductionPercentage: number;
}

// 3. Resize Image Dimensions
export interface ResizeResponseData {
  original: ImageDetailsWithData;
  current: ImageDetailsWithData;
}

// 4. Upscale Image Resolution
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
  increase?: UpscaleIncreaseInfo;
}

export interface ImageBinaryHeaders {
  originalWidth?: number;
  originalHeight?: number;
  originalSizeKB?: number;
  originalSizeMB?: number;
  currentWidth?: number;
  currentHeight?: number;
  currentSizeKB?: number;
  currentSizeMB?: number;
  [key: string]: any;
}
