import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProctorService } from "./proctor.service";
import { ProctorControllerBase } from "./base/proctor.controller.base";

@swagger.ApiTags("proctors")
@common.Controller("proctors")
export class ProctorController extends ProctorControllerBase {
  constructor(
    protected readonly service: ProctorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
