import { rgx } from '../helpers/regex.helper';
import { CreateRoomDto } from '../models/room/room.dto';
import { roomModel } from '../models/room/room.model';

export const createRoom = async (room: CreateRoomDto) => {
  await roomModel.create(room);
  return room;
};

export const listRoomsAvailable = async () => {
  const rooms = await roomModel.find({
    available: true,
  });

  return rooms;
};

export const roomAvailableByName = async (roomName: string) => {
  const room = await roomModel.findOne({
    available: true,
    name: {
      $regex: rgx(roomName),
    },
  });

  return room;
};

export const detailRoomById = async (roomId: string) => roomModel.findById(roomId);

export const detailRoomByName = async (roomName: string) => roomModel.findOne({
  name: {
    $regex: rgx(roomName),
  },
});

export const updateRoomStatusById =
  async (roomId: string, status: boolean) => roomModel.findOneAndUpdate({
    _id: roomId,
  }, { available: status });
