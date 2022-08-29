import { Controller, HttpRequest, HttpResponse, Response } from "../../../../shared/contracts";
import { GetAllSubjects } from "../../domain/usecases";

export class GetAllSubjectsController implements Controller {
  #usecase: GetAllSubjects;

  constructor(usecase: GetAllSubjects) {
    this.#usecase = usecase;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const subjects = await this.#usecase.execute();
  
    return Response.success(subjects);
  }

}
