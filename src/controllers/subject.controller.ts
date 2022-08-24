import { HttpRequest, HttpResponse, Response } from "../contracts";
import { SubjectServiceImp } from "../services";

export interface SubjectController {
  getAllSubject(request: HttpRequest): Promise<HttpResponse>;
  getSubjectByUid(request: HttpRequest): Promise<HttpResponse>;
  createSubject(request: HttpRequest): Promise<HttpResponse>;
  deleteSubject(request: HttpRequest): Promise<HttpResponse>;
}

export class SubjectControllerImp implements SubjectController {
  async getAllSubject(request: HttpRequest): Promise<HttpResponse> {
    const service = new SubjectServiceImp();

    const subjects = await service.getAllSubjects();

    return Response.success(subjects);
  }

  async getSubjectByUid(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;
    console.log(uid);
    
    const service = new SubjectServiceImp();

    const subject = await service.getSubjectByUid(uid);

    return Response.success(subject);
  }

  async createSubject(request: HttpRequest): Promise<HttpResponse> {
    const { name } = request.body;
    const service = new SubjectServiceImp();

    const subject = await service.createSubject({ name });

    return Response.success(subject);
  }

  async deleteSubject(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;
    const service = new SubjectServiceImp();

    const result = await service.deleteSubject(uid);

    return Response.success(result);
  }
}