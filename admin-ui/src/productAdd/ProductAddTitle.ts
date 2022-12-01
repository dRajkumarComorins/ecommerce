import { ProductAdd as TProductAdd } from "../api/productAdd/ProductAdd";

export const PRODUCTADD_TITLE_FIELD = "name";

export const ProductAddTitle = (record: TProductAdd): string => {
  return record.name || record.id;
};
