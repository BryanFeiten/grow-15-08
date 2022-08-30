import { Request, Response } from "express"
import { CustomError } from "../errors";
import { HttpResponse, Response as AppResponse } from '../contracts/helpers/http.response';
import { HttpRequest } from "../contracts/helpers/http.request";
import { Controller } from "../contracts";

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response): Promise<Response> => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
    };

    let httpResponse: HttpResponse;

    try {
      httpResponse = await controller.handle(httpRequest);
    } catch (error: any) {
      httpResponse = error instanceof CustomError
        ? AppResponse.failure(error.code, error.process, error.message, error)
        : AppResponse.serverFailure(error.process, error);
    } finally {
      return res.status(httpResponse!.code).json(httpResponse!.body ?? httpResponse!.error);
    }
  }
}