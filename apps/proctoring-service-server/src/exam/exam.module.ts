import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExamModuleBase } from "./base/exam.module.base";
import { ExamService } from "./exam.service";
import { ExamController } from "./exam.controller";
import { ExamResolver } from "./exam.resolver";

@Module({
  imports: [ExamModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExamController],
  providers: [ExamService, ExamResolver],
  exports: [ExamService],
})
export class ExamModule {}
