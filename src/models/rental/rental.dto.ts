import { ObjectId } from "mongoose";

export class CreateRentalDto {
  checkIn: Date;
  numberOfPerson: number;
  status: number;
  _room: ObjectId;
  _customer: ObjectId;
}
