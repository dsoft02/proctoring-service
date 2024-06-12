import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ViolationModuleBase } from "./base/violation.module.base";
import { ViolationService } from "./violation.service";
import { ViolationController } from "./violation.controller";
import { ViolationResolver } from "./violation.resolver";

@Module({
  imports: [ViolationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ViolationController],
  providers: [ViolationService, ViolationResolver],
  exports: [ViolationService],
})
export class ViolationModule {}
