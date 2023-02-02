import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);
import { YupMessages } from '../helpers/constants';
export const formSchema = Yup.object().shape({
  username: Yup.string()
    .required(YupMessages.required)
    .min(6, YupMessages.min)
    .max(32, YupMessages.max),

  password: Yup.string()
    .required(YupMessages.required)
    .min(6, YupMessages.min)
    .minNumbers(1, YupMessages.min_numbers)
    .minUppercase(1, YupMessages.min_uppercase),
});
