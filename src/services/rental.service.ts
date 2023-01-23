import { CreateRentalDto } from "../models/rental/rental.dto";
import { rentalModel } from "../models/rental/rental.model";

export const createRental = async (rental: CreateRentalDto) => {
  await rentalModel.create(rental);
  return rental;
}
