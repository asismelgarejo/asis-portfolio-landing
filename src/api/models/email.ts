import { Response } from "./common";

export type EmailPost = {
  fullname: string;
  email: string;
  subject: string;
  description: string;
};

export type EmailSentResponse = Response<{ success: boolean }>;
