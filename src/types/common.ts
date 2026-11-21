export interface ApiSuccessResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export interface ApiErrorDetail {
  path: string | number;
  message: string;
}

export interface ApiErrorResponse {
  success: false;
  statusCode: number;
  message: string;
  error?: ApiErrorDetail[];
  stack?: string | null;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
