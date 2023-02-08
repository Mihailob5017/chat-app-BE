import 'express-session';
declare module 'express-session' {
  interface Session {
    user: {
      username: string;
      id: string;
    };
  }
}

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

type SameSignType = 'none' | 'lax' | 'strict';

export interface SameSightInterface {
  param: SameSignType;
}
