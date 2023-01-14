export interface Image {
  url: string;
  caption: string;
}

export interface Response<T> {
  data: T;
  success: boolean;
}
