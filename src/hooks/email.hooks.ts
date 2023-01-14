import {
  CommonError,
  EmailPost,
  EmailSentResponse,
} from "@api/models";
import { emailService } from "@api/repositories";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export const useMutationEmail = (
  options: UseMutationOptions<EmailSentResponse, CommonError, EmailPost>
) => {
  return useMutation<EmailSentResponse, CommonError, EmailPost>({
    mutationKey: ["email"],
    mutationFn: (data) => emailService.sendEmail(data),
    ...options,
  });
};
