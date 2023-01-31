import { SpecializationModel, Response } from "@api/models";
import { AxiosInstance } from "axios";
import { api } from "../api";

class SpecializationsRepository {
  constructor(private api: AxiosInstance) {}
  async getSpecializations(): Promise<Response<SpecializationModel[]>> {
    try {
      const response = await this.api.get<SpecializationModel[]>(
        "/specializations"
      );
      return {
        success: true,
        data: response.data,
      };
    } catch (e: any) {
      throw new Error(e?.message ?? "Error");
    }
  }
}

export const specializationsService = new SpecializationsRepository(api);
