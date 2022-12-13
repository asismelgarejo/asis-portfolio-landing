export interface WorkExperience {
  _id: string;
  job: {
    role: string;
    startDate: Date;
    endDate: Date;
    description: string;
  };
  company: {
    image: string;
    name: string;
  };
}
