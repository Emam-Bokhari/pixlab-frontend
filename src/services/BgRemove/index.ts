import { ApiSuccessResponse, BgRemoveResponseData } from "@/types";

const BASE_API =
  process.env.NEXT_PUBLIC_BASE_API ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://172.19.112.1:5000/api/v1";

export const removeBackground = async (
  imageFile: File,
  bgColor?: string
): Promise<ApiSuccessResponse<BgRemoveResponseData>> => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);
    if (bgColor && bgColor.trim()) {
      formData.append("bgColor", bgColor.trim());
    }

    const res = await fetch(`${BASE_API}/bg-remove`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to remove background");
  }
};

export const downloadBgRemovedImage = async (
  imageFile: File,
  bgColor?: string
): Promise<Blob> => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);
    if (bgColor && bgColor.trim()) {
      formData.append("bgColor", bgColor.trim());
    }

    const res = await fetch(`${BASE_API}/bg-remove?download=true`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error(`Download failed with status ${res.status}`);
    }

    return await res.blob();
  } catch (error: any) {
    throw new Error(error?.message || "Failed to download image");
  }
};
