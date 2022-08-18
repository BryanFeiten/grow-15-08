import { Router } from "express";
import { adaptRoute } from "../adapters";
import { SubjectControllerImp } from "../controllers/subject.controller";

export class SubjectRoute {
  init() {
    const routes = Router();
    const path = '/subject';
    const controller = () => new SubjectControllerImp();

    routes.get(`${path}`, adaptRoute(controller().getAllSubject));

    routes.get(`${path}/:uid`, adaptRoute(controller().getSubjectByUid));

    routes.post(`${path}`, adaptRoute(controller().createSubject));

    routes.delete(`${path}/:uid`, adaptRoute(controller().deleteSubject));

    return routes;
  };
}