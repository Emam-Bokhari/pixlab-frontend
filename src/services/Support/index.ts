import { BASE_API } from "@/constants";
import { ApiSuccessResponse, SupportPayload, SupportResponseData } from "@/types";

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
