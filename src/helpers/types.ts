export interface YupMessageInterface {
  [key: string]: string;
}
export interface ResponseParams {
  user: {
    username: string;
    password: string;
  } | null;
  success: boolean;
  error: {
    message: string;
    displayMessage: string;
  } | null;
}
