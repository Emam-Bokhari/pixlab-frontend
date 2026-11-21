import { ApiSuccessResponse, ResizeResponseData } from "@/types";

const BASE_API =
  process.env.NEXT_PUBLIC_BASE_API ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://172.19.112.1:5000/api/v1";

export const resizeImage = async (
  imageFile: File,
  width: number,
  height: number
): Promise<ApiSuccessResponse<ResizeResponseData>> => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("width", String(width));
    formData.append("height", String(height));

    const res = await fetch(`${BASE_API}/resize`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to resize image");
  }
};

export const downloadResizedImage = async (
  imageFile: File,
  width: number,
  height: number
): Promise<Blob> => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("width", String(width));
    formData.append("height", String(height));

    const res = await fetch(`${BASE_API}/resize?download=true`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error(`Download failed with status ${res.status}`);
    }

    return await res.blob();
  } catch (error: any) {
    throw new Error(error?.message || "Failed to download resized image");
  }
};
