import { ApiSuccessResponse, ReduceResponseData } from "@/types";

const BASE_API =
  process.env.NEXT_PUBLIC_BASE_API ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://172.19.112.1:5000/api/v1";

export const reduceImage = async (
  imageFile: File,
  targetSizeKb: number
): Promise<ApiSuccessResponse<ReduceResponseData>> => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("targetSizeKb", String(targetSizeKb));

    const res = await fetch(`${BASE_API}/reduce`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to reduce image size");
  }
};

export const downloadReducedImage = async (
  imageFile: File,
  targetSizeKb: number
): Promise<Blob> => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("targetSizeKb", String(targetSizeKb));

    const res = await fetch(`${BASE_API}/reduce?download=true`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error(`Download failed with status ${res.status}`);
    }

    return await res.blob();
  } catch (error: any) {
    throw new Error(error?.message || "Failed to download reduced image");
  }
};
