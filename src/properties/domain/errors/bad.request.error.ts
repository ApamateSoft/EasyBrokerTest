import { NetworkError } from './network.error';

export class BadRequestError extends Error implements NetworkError {
  public readonly code: number = 401;

  constructor(public readonly message: string = 'Bad request') {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}
