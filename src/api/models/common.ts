export interface Image {
  url: string;
  alt: string;
}

export interface Response<T> {
  data: T;
  success: boolean;
}
export interface CommonError {
  message: string;
}
