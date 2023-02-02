export interface YupMessageInterface {
  [key: string]: string;
}
export interface ResponseParams {
  user: {
    username: any;
    password: any;
  } | null;
  success: boolean;
  error: {
    message: string;
    displayMessage: string;
  } | null;
}
