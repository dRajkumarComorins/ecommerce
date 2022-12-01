import { ProductAddWhereInput } from "./ProductAddWhereInput";
import { ProductAddOrderByInput } from "./ProductAddOrderByInput";

export type ProductAddFindManyArgs = {
  where?: ProductAddWhereInput;
  orderBy?: Array<ProductAddOrderByInput>;
  skip?: number;
  take?: number;
};
