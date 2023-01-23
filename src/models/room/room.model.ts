import { Schema, model, Document } from 'mongoose';

export interface IRoom extends Document {
  name: string;
  available: boolean;
  maximumNumber: number;
  note: string; // phòng lạnh, phòng quạt
  createdAt: Date;
  updatedAt: Date;
}

const roomSchema = new Schema({
  name: { type: String, required: true },
  available: { type: Boolean, default: true },
  maximumNumber: { type: Number, required: true },
  note: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const roomModel = model<IRoom & Document>('Room', roomSchema);
