import { CVModel, LevelModel, Response } from "@api/models";
import { AxiosInstance, AxiosResponse } from "axios";
import { api } from "../api";

class LevelsRepository {
  constructor(private api: AxiosInstance) {}
  async getLevels(): Promise<Response<LevelModel[]>> {
    try {
      const response = await this.api.get<LevelModel[]>("/levels");
      return {
        success: true,
        data: response.data,
      };
    } catch (e: any) {
      throw new Error(e?.message ?? "Couldn't download CV");
    }
  }
}

export const levelsService = new LevelsRepository(api);
