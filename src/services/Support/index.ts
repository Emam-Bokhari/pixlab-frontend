import { ApiSuccessResponse, SupportPayload, SupportResponseData } from "@/types";

const BASE_API =
  process.env.NEXT_PUBLIC_BASE_API ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://172.19.112.1:5000/api/v1";

export const addSupport = async (
  payload: SupportPayload
): Promise<ApiSuccessResponse<SupportResponseData>> => {
  try {
    const res = await fetch(`${BASE_API}/supports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to submit support request");
  }
};
