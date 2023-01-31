import { CommonError, Response, SkillModel, SkillParams } from "@api/models";
import { skillsService } from "@api/repositories";
import { QueryOptions, UseMutationOptions, useQuery, useMutation } from "@tanstack/react-query";

// export const useSkills = (
//   params?: SkillParams,
//   options?: QueryOptions<, CommonError>
// ) => {
//   return useQuery<Response<SkillModel[]>, CommonError>(
//     ["skills", params],
//     () => skillsService.getSkills(params),
//     options
//   );
// };


export const useMutationSkills = (
    options: UseMutationOptions<Response<SkillModel[]>, CommonError, SkillParams>
  ) => {
    return useMutation<Response<SkillModel[]>, CommonError, SkillParams>({
      mutationKey: ["email"],
      mutationFn: (params) =>  skillsService.getSkills(params),
      ...options,
    });
  };