/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, ProductAdd } from "@prisma/client";

export class ProductAddServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProductAddFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductAddFindManyArgs>
  ): Promise<number> {
    return this.prisma.productAdd.count(args);
  }

  async findMany<T extends Prisma.ProductAddFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductAddFindManyArgs>
  ): Promise<ProductAdd[]> {
    return this.prisma.productAdd.findMany(args);
  }
  async findOne<T extends Prisma.ProductAddFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductAddFindUniqueArgs>
  ): Promise<ProductAdd | null> {
    return this.prisma.productAdd.findUnique(args);
  }
  async create<T extends Prisma.ProductAddCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductAddCreateArgs>
  ): Promise<ProductAdd> {
    return this.prisma.productAdd.create<T>(args);
  }
  async update<T extends Prisma.ProductAddUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductAddUpdateArgs>
  ): Promise<ProductAdd> {
    return this.prisma.productAdd.update<T>(args);
  }
  async delete<T extends Prisma.ProductAddDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductAddDeleteArgs>
  ): Promise<ProductAdd> {
    return this.prisma.productAdd.delete(args);
  }
}
