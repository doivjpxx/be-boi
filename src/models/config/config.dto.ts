export class CreateConfigDto {
  amountOfHour: number;
  amountOfDate: number;
  extraAmountOfHour: number;
  extraAmountOfDate: number;
  deletedAt?: Date;
}

export class UpdateConfigDto {
  amountOfHour?: number;
  amountOfDate?: number;
  extraAmountOfHour?: number;
  extraAmountOfDate?: number;
}