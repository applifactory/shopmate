import { CartItem } from './cart-item';

export interface Cart {
  cart_id?: string;
  total_amount?: number;
  items?: Array<CartItem>;
}