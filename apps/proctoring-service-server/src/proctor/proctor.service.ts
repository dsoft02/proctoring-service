import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProctorServiceBase } from "./base/proctor.service.base";

@Injectable()
export class ProctorService extends ProctorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
