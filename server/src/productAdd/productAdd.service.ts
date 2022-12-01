import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductAddServiceBase } from "./base/productAdd.service.base";

@Injectable()
export class ProductAddService extends ProductAddServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
