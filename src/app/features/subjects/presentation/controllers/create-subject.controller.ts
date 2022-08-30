import { HttpRequest, HttpResponse, Response, Controller } from "../../../../shared/contracts";
import { CreateSubject } from "../../domain/usecases";

export class CreateSubjectController implements Controller {
  #usecase: CreateSubject;

  constructor(usecase: CreateSubject) {
    this.#usecase = usecase;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { name } = request.body;

    const subject = await this.#usecase.execute({ name });

    return Response.success(subject);
  }
}