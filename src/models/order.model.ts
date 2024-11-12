import { Schema, model } from 'mongoose';

export interface IOrder {
  amount: string;
  walletId: string;
  type: string;
  standardToken: string;
  status: string;
}
const orderSchema = new Schema<IOrder>({
  amount: { type: String },
  type: { type: String },
  walletId: { type: String },
  standardToken: { type: String },
  status: { type: String }
})

const Order = model<IOrder>('Order', orderSchema);
export default Order