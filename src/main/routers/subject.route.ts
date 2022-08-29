import { Router } from "express";
import { makeCreateSubjectController, makeDeleteSubjectController, makeGetAllSubjectsController, makeGetSubjectByUidController } from "../factories/controllers/subjects";
import { adaptRoute } from "../../app/shared/adapters";

export class SubjectRoute {
  init() {
    const routes = Router();
    const path = '/subject';

    routes.get(`${path}`, adaptRoute(makeGetAllSubjectsController()));
    routes.get(`${path}/:uid`, adaptRoute(makeGetSubjectByUidController()));
    routes.post(`${path}`, adaptRoute(makeCreateSubjectController()));
    routes.delete(`${path}/:uid`, adaptRoute(makeDeleteSubjectController()));

    return routes;
  };
}