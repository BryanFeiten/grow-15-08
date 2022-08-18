import { CustomError } from "./custom.error";

export class DomainError extends CustomError {
  constructor(message: string) {
    super('Domain', 400, message);
  }
}