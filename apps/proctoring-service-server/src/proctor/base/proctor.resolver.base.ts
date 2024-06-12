/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Proctor } from "./Proctor";
import { ProctorCountArgs } from "./ProctorCountArgs";
import { ProctorFindManyArgs } from "./ProctorFindManyArgs";
import { ProctorFindUniqueArgs } from "./ProctorFindUniqueArgs";
import { CreateProctorArgs } from "./CreateProctorArgs";
import { UpdateProctorArgs } from "./UpdateProctorArgs";
import { DeleteProctorArgs } from "./DeleteProctorArgs";
import { SessionFindManyArgs } from "../../session/base/SessionFindManyArgs";
import { Session } from "../../session/base/Session";
import { ProctorService } from "../proctor.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Proctor)
export class ProctorResolverBase {
  constructor(
    protected readonly service: ProctorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Proctor",
    action: "read",
    possession: "any",
  })
  async _proctorsMeta(
    @graphql.Args() args: ProctorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Proctor])
  @nestAccessControl.UseRoles({
    resource: "Proctor",
    action: "read",
    possession: "any",
  })
  async proctors(
    @graphql.Args() args: ProctorFindManyArgs
  ): Promise<Proctor[]> {
    return this.service.proctors(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Proctor, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Proctor",
    action: "read",
    possession: "own",
  })
  async proctor(
    @graphql.Args() args: ProctorFindUniqueArgs
  ): Promise<Proctor | null> {
    const result = await this.service.proctor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Proctor)
  @nestAccessControl.UseRoles({
    resource: "Proctor",
    action: "create",
    possession: "any",
  })
  async createProctor(
    @graphql.Args() args: CreateProctorArgs
  ): Promise<Proctor> {
    return await this.service.createProctor({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Proctor)
  @nestAccessControl.UseRoles({
    resource: "Proctor",
    action: "update",
    possession: "any",
  })
  async updateProctor(
    @graphql.Args() args: UpdateProctorArgs
  ): Promise<Proctor | null> {
    try {
      return await this.service.updateProctor({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Proctor)
  @nestAccessControl.UseRoles({
    resource: "Proctor",
    action: "delete",
    possession: "any",
  })
  async deleteProctor(
    @graphql.Args() args: DeleteProctorArgs
  ): Promise<Proctor | null> {
    try {
      return await this.service.deleteProctor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Session], { name: "sessions" })
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "read",
    possession: "any",
  })
  async findSessions(
    @graphql.Parent() parent: Proctor,
    @graphql.Args() args: SessionFindManyArgs
  ): Promise<Session[]> {
    const results = await this.service.findSessions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
