import { Gender } from "./customer.model";

class CreateCustomerDto {
  name: string;
  address?: string;
  phone?: string;
  identifier: string; // CCCD / CMND
  gender?: Gender;
}

export default CreateCustomerDto;
