import { CustomError } from "./custom.error";

export class InfraError extends CustomError {
  constructor(message: string) {
    super('Infra', 400, message);
  }
}