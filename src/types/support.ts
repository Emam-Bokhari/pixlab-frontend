export enum SUPPORT_STATUS {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  RESOLVED = "RESOLVED",
}

export interface SupportPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  status?: SUPPORT_STATUS | string;
  isDeleted?: boolean;
}

export interface SupportResponseData {
  name: string;
  email: string;
  subject: string;
  message: string;
  sentAt?: string;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}

export type TSupport = SupportResponseData;
