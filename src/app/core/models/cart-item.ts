export interface CartItem {
  item_id?:	number;
  name?: string;
  attributes?: string;
  price?: number;
  quantity?: number;
  subtotal?: number;
}