import { Request, Response } from "express"
import { CustomError } from "../errors";
import { HttpResponse, Response as AppResponse } from '../contracts/helpers/http.response';
import { HttpRequest } from "../contracts/helpers/http.request";

export const adaptRoute = (controller: any) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
    };

    try {
      const httpResponse = await controller(httpRequest);

      return httpResponse;
    } catch (error: any) {
      if (error instanceof CustomError) {
        return AppResponse.failure(error.code, error.process, error.message, error)
      }
      
      return AppResponse.serverFailure(error.process, error);
    }
  }
}