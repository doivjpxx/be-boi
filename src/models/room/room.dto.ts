export class CreateRoomDto {
  name: string;
  available: boolean;
  maximumNumber: number;
  note?: string; // phòng lạnh, phòng quạt
}
