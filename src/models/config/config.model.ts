import { Schema, model, Document } from 'mongoose';

// Chỉnh số tiền
// Ví dụ: Ở theo tiếng tính 100k 2 tiếng, cứ mỗi tiếng lố thì +20k
// Ví dụ: Ở theo ngày thì tính 200k 1 ngày...
export interface IConfig extends Document {
  amountOfHour: number;
  amountOfDate: number;
  extraAmountOfHour: number;
  extraAmountOfDate: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const configSchema = new Schema({
  amountOfHour: { type: Number, default: 100 }, // 100k cho 2 tiếng
  amountOfDate: { type: Number, default: 200 },
  extraAmountOfHour: { type: Number, default: 20 },
  extraAmountOfDate: { type: Number, default: 20 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: Date,
});

export const configModel = model<IConfig & Document>('Config', configSchema);
