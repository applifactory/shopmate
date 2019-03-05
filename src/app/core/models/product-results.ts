import { Product } from './product';

export interface ProductResults {
  products?: Product[];
  page?: number;
  limit?: number;
  total?: number;
}