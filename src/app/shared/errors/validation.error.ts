import { CustomError } from ".";
import { Notification } from "../contracts";

export class ValidationError extends CustomError {
  process: string;
  details: Notification[];

  constructor(process: string, notifications: Notification[]) {
    super(process, 400, 'Requisição inválida');
    this.process = process;
    this.details = notifications;
  }
}