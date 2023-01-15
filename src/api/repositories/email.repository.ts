import { EmailSentResponse, EmailPost } from "@api/models";
import { AxiosInstance } from "axios";
import { api } from "../api";

class EmailRepository {
  constructor(private api: AxiosInstance) {}
  async sendEmail(data: EmailPost): Promise<EmailSentResponse> {
    try {
      const response = await this.api.post<EmailSentResponse>(
        "/email/contact",
        data
      );
      return response.data;
    } catch (e: any) {
      throw new Error(e?.message ?? "Error sending email");
    }
  }
}

export const emailService = new EmailRepository(api);
