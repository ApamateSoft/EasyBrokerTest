import { NetworkError } from './network.error';

export class UnauthorizedError extends Error implements NetworkError {
  public readonly code: number = 401;

  constructor(public readonly message: string = 'unauthorized error') {
    super(message);
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}
