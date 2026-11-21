import { BASE_API } from "@/constants";
import { ApiSuccessResponse, BgRemoveResponseData } from "@/types";

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
