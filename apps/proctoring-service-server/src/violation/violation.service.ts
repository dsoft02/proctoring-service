import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ViolationServiceBase } from "./base/violation.service.base";

@Injectable()
export class ViolationService extends ViolationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
