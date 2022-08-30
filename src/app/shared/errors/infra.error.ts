import { CustomError } from "./custom.error";

export class InfraError extends CustomError {
  constructor(component: string, message: string) {
    super(`${component} Infra`, 400, message);
  }
}