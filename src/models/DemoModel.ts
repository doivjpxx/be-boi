import { Schema, model, Document } from 'mongoose';

export interface IDemo extends Document {
  firstName?: string;
  lastName?: string;
}

const DemoSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

export const Demo = model<IDemo>('Demo', DemoSchema);
