import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExamService } from "./exam.service";
import { ExamControllerBase } from "./base/exam.controller.base";

@swagger.ApiTags("exams")
@common.Controller("exams")
export class ExamController extends ExamControllerBase {
  constructor(
    protected readonly service: ExamService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
