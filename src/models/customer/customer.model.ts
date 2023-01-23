import { Schema, model, Document } from 'mongoose';

export enum Gender {
  "MALE", "FEMALE", "OTHER",
}

export interface ICustomer extends Document {
  name: string;
  address?: string;
  phone?: string;
  identifier: string; // CCCD / CMND
  gender?: Gender;
  createdAt: Date;
  updatedAt: Date;
}

const customerSchema = new Schema({
  name: { type: String, required: true },
  address: String,
  phone: String,
  identifer: { type: String, required: true },
  gender: { type: String, enum: Gender},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const customerModel = model<ICustomer & Document>('Customer', customerSchema);
