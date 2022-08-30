import { HttpRequest } from "../helpers/http.request";
import { HttpResponse } from "../helpers/http.response";

export interface Controller {
  handle(request: HttpRequest): Promise<HttpResponse>;
}