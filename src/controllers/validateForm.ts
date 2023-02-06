import { Request } from 'express';
import { formatResponse } from '../helpers/helpers';
import { formSchema } from '../models/yupSchema';
import { ResponseParams } from 'helpers/types';
export const validateForm = async (req: Request): Promise<ResponseParams> => {
  const formData = req.body;
  const dataResponse = await formSchema
    .validate(formData)
    .then((response: any) => {
      return formatResponse(response);
    })
    .catch((err: any) => {
      return formatResponse(err);
    });
  return dataResponse;
};
