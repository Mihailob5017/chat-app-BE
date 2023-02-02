import { ResponseParams } from './types';
export const formatResponse = (dataOrError: any): ResponseParams | null => {
  if (dataOrError.type) {
    return {
      user: null,
      success: false,
      error: {
        message: `field:${dataOrError.path} - error:${dataOrError.errors[0]}`,
        displayMessage: `Something went wrong`,
      },
    };
  }

  return {
    user: {
      username: dataOrError.username,
      password: dataOrError.password,
    },
    success: true,
    error: null,
  };
};
