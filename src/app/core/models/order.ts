export interface Order {
  order_id?: number;
  product_id?: number;
  attributes?: string;
  product_name?: string;
  quantity?: number;
  unit_cost?: number;
  subtotal?: number;
}