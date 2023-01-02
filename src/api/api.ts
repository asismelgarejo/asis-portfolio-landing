import { BASE_URL } from "@toolbox/constants/app";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class ApiService {
  public api: AxiosInstance;
  constructor(config?: AxiosRequestConfig) {
    this.api = axios.create({ ...config, baseURL: BASE_URL });
  }
}

export const api = new ApiService()!.api;
