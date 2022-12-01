import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductAddService } from "./productAdd.service";
import { ProductAddControllerBase } from "./base/productAdd.controller.base";

@swagger.ApiTags("productAdds")
@common.Controller("productAdds")
export class ProductAddController extends ProductAddControllerBase {
  constructor(
    protected readonly service: ProductAddService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
