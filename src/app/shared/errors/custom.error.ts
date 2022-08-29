export class CustomError extends Error {
  process: string;
  code: number;
  message: string;

  constructor(process: string, code: number, message: string) {
    super();
    
    this.process = process;
    this.message = message;
    this.code = code;
  }
}