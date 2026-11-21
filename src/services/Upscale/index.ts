import { ApiSuccessResponse, UpscaleResponseData } from "@/types";

const BASE_API =
  process.env.NEXT_PUBLIC_BASE_API ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://172.19.112.1:5000/api/v1";

export const upscaleImage = async (
  imageFile: File,
  scale: number = 2
): Promise<ApiSuccessResponse<UpscaleResponseData>> => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("scale", String(scale));

    const res = await fetch(`${BASE_API}/upscales`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to upscale image");
  }
};

export const downloadUpscaledImage = async (
  imageFile: File,
  scale: number = 2
): Promise<Blob> => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("scale", String(scale));

    const res = await fetch(`${BASE_API}/upscales?download=true`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error(`Download failed with status ${res.status}`);
    }

    return await res.blob();
  } catch (error: any) {
    throw new Error(error?.message || "Failed to download upscaled image");
  }
};
