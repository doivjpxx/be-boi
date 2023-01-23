// Phiếu thuê phòng
import { ObjectId } from 'mongodb';
import { Schema, model, Document } from 'mongoose';

export const RentalType = {
  ByDate: 1,
  ByHour: 2,
};

export const RentalStatus = {
  Active: 1,
  Inactive: 0,
}

export interface IRental extends Document {
  checkIn: Date;
  numberOfPerson: number;
  type: number;
  _room: ObjectId;
  _customer: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const rentalSchema = new Schema({
  checkIn: { type: Date, required: true },
  numberOfPerson: { type: Number, required: true },
  status: { type: Number, default: RentalStatus.Active },
  type: { type: Number, default: RentalType.ByHour },
  _room: { type: Schema.Types.ObjectId, ref: 'Room' },
  _customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const rentalModel = model<IRental & Document>('Rental', rentalSchema);
