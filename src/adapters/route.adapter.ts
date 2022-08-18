import { Request, Response } from "express"
import { CustomError } from "../errors";
import { HttpResponse } from '../contracts/helpers/http.response';
import { HttpRequest } from "../contracts/helpers/http.request";

export const adaptRoute = (controller: any) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
    };
    let httpResponse: HttpResponse = {
      code: 500,
      body: {},
    };

    try {
      httpResponse = await controller(httpRequest);
    } catch (error) {
      if (error instanceof CustomError) {
        httpResponse.code = error.code;
        httpResponse.body = {
          process: error.process,
          message: error.message,
        };
      } else {
        httpResponse.code = 500;
        httpResponse.body = {
          process: 'Desconhecido',
          message: 'Erro interno',
        };
      }
    }

    return res.status(httpResponse.code).json(httpResponse.body);
  }
}