import CreateCustomerDto from "../models/customer/customer.dto";
import { customerModel } from "../models/customer/customer.model";

export const createCustomer = async ({ name, address, phone, identifier, gender }: CreateCustomerDto) => {
  const customer =  await customerModel.create({
    name,
    address,
    phone,
    identifier,
    gender,
  });

  return customer;
}

export const detailCustomerById = async (id: string) => await customerModel.findById(id);