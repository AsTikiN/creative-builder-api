import { HttpStatus } from '@nestjs/common';
import { ApiErrorCode } from './api-error-code.enum';
import { IApiError } from './api-error.interface';

export type IApiErrorMap = {
  [code in ApiErrorCode]: Omit<IApiError, 'code'>;
};

export const apiErrorMap: IApiErrorMap = {
  [ApiErrorCode.Internal]: {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    message: 'Internal server error',
  },
  [ApiErrorCode.EntityNotFound]: {
    status: HttpStatus.NOT_FOUND,
    message: 'Entity not found',
  },
  [ApiErrorCode.ExpiredAccessToken]: {
    status: HttpStatus.UNAUTHORIZED,
    message: 'Expired access token',
  },
  [ApiErrorCode.IncorrectPassword]: {
    status: HttpStatus.UNAUTHORIZED,
    message: 'Incorrect password',
  },
  [ApiErrorCode.InvalidAccessToken]: {
    status: HttpStatus.UNAUTHORIZED,
    message: 'Invalid access token',
  },
  [ApiErrorCode.NoAccessToken]: {
    status: HttpStatus.UNAUTHORIZED,
    message: 'No access token',
  },
  [ApiErrorCode.EmailNotUnique]: {
    status: HttpStatus.CONFLICT,
    message: 'Email is not unique',
  },
};
