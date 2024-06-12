import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ViolationService } from "./violation.service";
import { ViolationControllerBase } from "./base/violation.controller.base";

@swagger.ApiTags("violations")
@common.Controller("violations")
export class ViolationController extends ViolationControllerBase {
  constructor(
    protected readonly service: ViolationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
