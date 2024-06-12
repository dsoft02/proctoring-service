/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Violation as PrismaViolation,
  Session as PrismaSession,
} from "@prisma/client";

export class ViolationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ViolationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.violation.count(args);
  }

  async violations<T extends Prisma.ViolationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ViolationFindManyArgs>
  ): Promise<PrismaViolation[]> {
    return this.prisma.violation.findMany<Prisma.ViolationFindManyArgs>(args);
  }
  async violation<T extends Prisma.ViolationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ViolationFindUniqueArgs>
  ): Promise<PrismaViolation | null> {
    return this.prisma.violation.findUnique(args);
  }
  async createViolation<T extends Prisma.ViolationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ViolationCreateArgs>
  ): Promise<PrismaViolation> {
    return this.prisma.violation.create<T>(args);
  }
  async updateViolation<T extends Prisma.ViolationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ViolationUpdateArgs>
  ): Promise<PrismaViolation> {
    return this.prisma.violation.update<T>(args);
  }
  async deleteViolation<T extends Prisma.ViolationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ViolationDeleteArgs>
  ): Promise<PrismaViolation> {
    return this.prisma.violation.delete(args);
  }

  async getSession(parentId: string): Promise<PrismaSession | null> {
    return this.prisma.violation
      .findUnique({
        where: { id: parentId },
      })
      .session();
  }
}
