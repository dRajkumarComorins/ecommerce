/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateProductAddArgs } from "./CreateProductAddArgs";
import { UpdateProductAddArgs } from "./UpdateProductAddArgs";
import { DeleteProductAddArgs } from "./DeleteProductAddArgs";
import { ProductAddFindManyArgs } from "./ProductAddFindManyArgs";
import { ProductAddFindUniqueArgs } from "./ProductAddFindUniqueArgs";
import { ProductAdd } from "./ProductAdd";
import { ProductAddService } from "../productAdd.service";

@graphql.Resolver(() => ProductAdd)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductAddResolverBase {
  constructor(
    protected readonly service: ProductAddService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProductAdd",
    action: "read",
    possession: "any",
  })
  async _productAddsMeta(
    @graphql.Args() args: ProductAddFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ProductAdd])
  @nestAccessControl.UseRoles({
    resource: "ProductAdd",
    action: "read",
    possession: "any",
  })
  async productAdds(
    @graphql.Args() args: ProductAddFindManyArgs
  ): Promise<ProductAdd[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ProductAdd, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProductAdd",
    action: "read",
    possession: "own",
  })
  async productAdd(
    @graphql.Args() args: ProductAddFindUniqueArgs
  ): Promise<ProductAdd | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProductAdd)
  @nestAccessControl.UseRoles({
    resource: "ProductAdd",
    action: "create",
    possession: "any",
  })
  async createProductAdd(
    @graphql.Args() args: CreateProductAddArgs
  ): Promise<ProductAdd> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProductAdd)
  @nestAccessControl.UseRoles({
    resource: "ProductAdd",
    action: "update",
    possession: "any",
  })
  async updateProductAdd(
    @graphql.Args() args: UpdateProductAddArgs
  ): Promise<ProductAdd | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ProductAdd)
  @nestAccessControl.UseRoles({
    resource: "ProductAdd",
    action: "delete",
    possession: "any",
  })
  async deleteProductAdd(
    @graphql.Args() args: DeleteProductAddArgs
  ): Promise<ProductAdd | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
