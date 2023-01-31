import { AreaModel, Response } from "@api/models";
import { AxiosInstance } from "axios";
import { api } from "../api";

class AreasRepository {
  constructor(private api: AxiosInstance) {}
  async getAreas(): Promise<Response<AreaModel[]>> {
    try {
      const response = await this.api.get<AreaModel[]>("/areas");
      return {
        success: true,
        data: response.data,
      };
    } catch (e: any) {
      throw new Error(e?.message ?? "Error");
    }
  }
}

export const areasService = new AreasRepository(api);
