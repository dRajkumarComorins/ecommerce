import { Module } from "@nestjs/common";
import { ProductAddModuleBase } from "./base/productAdd.module.base";
import { ProductAddService } from "./productAdd.service";
import { ProductAddController } from "./productAdd.controller";
import { ProductAddResolver } from "./productAdd.resolver";

@Module({
  imports: [ProductAddModuleBase],
  controllers: [ProductAddController],
  providers: [ProductAddService, ProductAddResolver],
  exports: [ProductAddService],
})
export class ProductAddModule {}
