import { ResponseParams } from './types';
import { PrismaClient } from '@prisma/client';
export const formatResponse = (dataOrError: any): ResponseParams => {
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

export const prisma: PrismaClient = new PrismaClient();
