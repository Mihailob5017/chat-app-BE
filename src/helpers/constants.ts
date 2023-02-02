import { YupMessageInterface } from './types';

export const YupMessages: YupMessageInterface = {
  required: 'This field is required',
  min: 'This field has less than the minimum number of characters',
  max: 'This field has more than the maximum number of characters',
  password: 'The password is invalid',
  min_numbers: 'The minimum number of numbers must be at least 1',
  min_uppercase:
    'The minimum number of uppercase characters must be at least 1',
};
