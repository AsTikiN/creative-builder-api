export enum ApiErrorCode {
  Internal = 'internal',
  NoAccessToken = 'no-access-token',
  InvalidAccessToken = 'invalid-access-token',
  ExpiredAccessToken = 'expired-access-token',
  EntityNotFound = 'entity-not-found',
  IncorrectPassword = 'incorrect-password',
  EmailNotUnique = 'email-not-unique',
}
