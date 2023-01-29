import { SkillModel, Response } from "@api/models";
import { AxiosInstance, AxiosResponse } from "axios";
import { api } from "../api";

class SkillsRepository {
  constructor(private api: AxiosInstance) {}
  async getSkills(): Promise<Response<SkillModel[]>> {
    try {
      const response = await this.api.get<SkillModel[]>("/skills");
      return {
        success: true,
        data: response.data,
      };
    } catch (e: any) {
      throw new Error(e?.message ?? "Couldn't download CV");
    }
  }
}

export const skillsService = new SkillsRepository(api);
