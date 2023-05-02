export enum serviceType {
  carService,
  electrician,
  acService,
  laundryService,
}
export interface UserType {
  email: string;
  name: string;
  cart: CartType | null;
}
export interface CartType {
  totalAmount: number;
  Orders: OrderType[];
}
export interface OrderType {
  orderId: number;
  orderAmount: number;
  serviceType: serviceType;
  serviceName: string;
  dateOfBooking: Date;
  serviceDate: Date;
  serviceId: number;
}
