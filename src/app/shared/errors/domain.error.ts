import { CustomError } from "./custom.error";

export class DomainError extends CustomError {
  constructor(component: string, message: string) {
    super(`${component} Domain`, 400, message);
  }
}