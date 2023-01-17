import { CVModel, Response } from "@api/models";
import { documentsService } from "@api/repositories";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";

export const useCV = (
  options: UseMutationOptions<Response<CVModel>, { message: string }>
) => {
  return useMutation({
    mutationKey: ["cv"],
    mutationFn: () => documentsService.getCV(),
    ...options,
  });
};
export const saveVisit = () => {
  return useMutation({
    mutationKey: ["visit"],
    mutationFn: () => documentsService.saveVisit(),
  });
};
