/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ProctorService } from "../proctor.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProctorCreateInput } from "./ProctorCreateInput";
import { Proctor } from "./Proctor";
import { ProctorFindManyArgs } from "./ProctorFindManyArgs";
import { ProctorWhereUniqueInput } from "./ProctorWhereUniqueInput";
import { ProctorUpdateInput } from "./ProctorUpdateInput";
import { SessionFindManyArgs } from "../../session/base/SessionFindManyArgs";
import { Session } from "../../session/base/Session";
import { SessionWhereUniqueInput } from "../../session/base/SessionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProctorControllerBase {
  constructor(
    protected readonly service: ProctorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Proctor })
  @nestAccessControl.UseRoles({
    resource: "Proctor",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProctor(
    @common.Body() data: ProctorCreateInput
  ): Promise<Proctor> {
    return await this.service.createProctor({
      data: data,
      select: {
        createdAt: true,
        email: true,
        employeeId: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Proctor] })
  @ApiNestedQuery(ProctorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Proctor",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async proctors(@common.Req() request: Request): Promise<Proctor[]> {
    const args = plainToClass(ProctorFindManyArgs, request.query);
    return this.service.proctors({
      ...args,
      select: {
        createdAt: true,
        email: true,
        employeeId: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Proctor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Proctor",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async proctor(
    @common.Param() params: ProctorWhereUniqueInput
  ): Promise<Proctor | null> {
    const result = await this.service.proctor({
      where: params,
      select: {
        createdAt: true,
        email: true,
        employeeId: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Proctor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Proctor",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProctor(
    @common.Param() params: ProctorWhereUniqueInput,
    @common.Body() data: ProctorUpdateInput
  ): Promise<Proctor | null> {
    try {
      return await this.service.updateProctor({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          employeeId: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Proctor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Proctor",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProctor(
    @common.Param() params: ProctorWhereUniqueInput
  ): Promise<Proctor | null> {
    try {
      return await this.service.deleteProctor({
        where: params,
        select: {
          createdAt: true,
          email: true,
          employeeId: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/sessions")
  @ApiNestedQuery(SessionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "read",
    possession: "any",
  })
  async findSessions(
    @common.Req() request: Request,
    @common.Param() params: ProctorWhereUniqueInput
  ): Promise<Session[]> {
    const query = plainToClass(SessionFindManyArgs, request.query);
    const results = await this.service.findSessions(params.id, {
      ...query,
      select: {
        createdAt: true,
        endTime: true,

        exam: {
          select: {
            id: true,
          },
        },

        id: true,

        proctor: {
          select: {
            id: true,
          },
        },

        startTime: true,

        student: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sessions")
  @nestAccessControl.UseRoles({
    resource: "Proctor",
    action: "update",
    possession: "any",
  })
  async connectSessions(
    @common.Param() params: ProctorWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        connect: body,
      },
    };
    await this.service.updateProctor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sessions")
  @nestAccessControl.UseRoles({
    resource: "Proctor",
    action: "update",
    possession: "any",
  })
  async updateSessions(
    @common.Param() params: ProctorWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        set: body,
      },
    };
    await this.service.updateProctor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sessions")
  @nestAccessControl.UseRoles({
    resource: "Proctor",
    action: "update",
    possession: "any",
  })
  async disconnectSessions(
    @common.Param() params: ProctorWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        disconnect: body,
      },
    };
    await this.service.updateProctor({
      where: params,
      data,
      select: { id: true },
    });
  }
}
