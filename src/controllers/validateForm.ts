import { Request, Response } from 'express';
import { formatResponse } from '../helpers/helpers';
import { formSchema } from '../models/yupSchema';

export const validateForm = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const formData = req.body;
  await formSchema
    .validate(formData)
    .then((response: any) => {
      res.send(formatResponse(response));
    })
    .catch((err: any) => {
      res.send(formatResponse(err));
    });
};
