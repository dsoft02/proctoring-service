import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProctorModuleBase } from "./base/proctor.module.base";
import { ProctorService } from "./proctor.service";
import { ProctorController } from "./proctor.controller";
import { ProctorResolver } from "./proctor.resolver";

@Module({
  imports: [ProctorModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProctorController],
  providers: [ProctorService, ProctorResolver],
  exports: [ProctorService],
})
export class ProctorModule {}
