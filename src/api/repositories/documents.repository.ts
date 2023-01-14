import { CVModel, Response } from "@api/models";
import { AxiosInstance, AxiosResponse } from "axios";
import { api } from "../api";

class DocumentsRepository {
  constructor(private api: AxiosInstance) {}
  async getCV(): Promise<Response<CVModel>> {
    try {
      const response = await this.api.get<Buffer>("/documents/cv", {
        responseType: "arraybuffer",
      });
      let filename = "";
      let content_disposition = "";
      let match: RegExpMatchArray | null = null;
      if (response.headers["content-disposition"])
        content_disposition = response.headers["content-disposition"];
      if (content_disposition !== "")
        match = content_disposition.match(/(?<=filename=").*(?=")/);
      if (match) filename = match[0];
      const binary = response.data;
      return {
        success: true,
        data: { binary, filename },
      };
    } catch (e: any) {
      console.log(e?.message)
      throw new Error(e?.message ?? "Couldn't download CV");
    }
  }
}

export const documentsService = new DocumentsRepository(api);
