export interface EducationAndCertification {
  _id: string;
  title: string;
  image: {
    url: string;
    label: string;
  };
  start_date?: Date;
  end_date: Date;
}
