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
  Exam as PrismaExam,
  Session as PrismaSession,
} from "@prisma/client";

export class ExamServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ExamCountArgs, "select">): Promise<number> {
    return this.prisma.exam.count(args);
  }

  async exams<T extends Prisma.ExamFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExamFindManyArgs>
  ): Promise<PrismaExam[]> {
    return this.prisma.exam.findMany<Prisma.ExamFindManyArgs>(args);
  }
  async exam<T extends Prisma.ExamFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExamFindUniqueArgs>
  ): Promise<PrismaExam | null> {
    return this.prisma.exam.findUnique(args);
  }
  async createExam<T extends Prisma.ExamCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExamCreateArgs>
  ): Promise<PrismaExam> {
    return this.prisma.exam.create<T>(args);
  }
  async updateExam<T extends Prisma.ExamUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExamUpdateArgs>
  ): Promise<PrismaExam> {
    return this.prisma.exam.update<T>(args);
  }
  async deleteExam<T extends Prisma.ExamDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExamDeleteArgs>
  ): Promise<PrismaExam> {
    return this.prisma.exam.delete(args);
  }

  async findSessions(
    parentId: string,
    args: Prisma.SessionFindManyArgs
  ): Promise<PrismaSession[]> {
    return this.prisma.exam
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .sessions(args);
  }
}
