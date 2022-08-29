import { HttpRequest, HttpResponse, Response, Controller } from "../../../../shared/contracts";
import { DeleteSubject } from "../../domain/usecases";

export class DeleteSubjectController implements Controller {
  #usecase: DeleteSubject;

  constructor(usecase: DeleteSubject) {
    this.#usecase = usecase;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    const result = await this.#usecase.execute(uid);

    return Response.success(result);
  }
}