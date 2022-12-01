import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductAddResolverBase } from "./base/productAdd.resolver.base";
import { ProductAdd } from "./base/ProductAdd";
import { ProductAddService } from "./productAdd.service";

@graphql.Resolver(() => ProductAdd)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductAddResolver extends ProductAddResolverBase {
  constructor(
    protected readonly service: ProductAddService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
