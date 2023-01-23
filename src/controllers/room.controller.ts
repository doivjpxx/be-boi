import HTTP_CODES from "../configs/http-codes";
import { NextFunction, Request, Response } from "express";
import { logger } from "../helpers/logger.helper";
import {
  createRoom,
  detailRoomById, detailRoomByName,
  listRoomsAvailable,
  roomAvailableByName, updateRoomStatusById,
} from '../services/room.service';

export class RoomController {
  static _name = 'roomController';

  public async addRoom(req: Request, res: Response, next: NextFunction) {
    try {
      const rental = await createRoom(req.body);
      res.status(HTTP_CODES.CREATED).send(rental);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async getRoomsAvailable(req: Request, res: Response) {
    const rooms = await listRoomsAvailable();
    res.status(HTTP_CODES.SUCCESS).send(rooms);
  }

  public async getRoomAvailableByName(req: Request, res: Response) {
    const room = await roomAvailableByName(req.params.name);
    res.status(HTTP_CODES.SUCCESS).send(room);
  }

  public async getRoomByName(req: Request, res: Response) {
    const room = await detailRoomByName(req.params.name);
    res.status(HTTP_CODES.SUCCESS).send(room);
  }

  public async updateRoomStatus(req: Request, res: Response) {
    const room = await updateRoomStatusById(req.body.id, req.body.status);
    res.status(HTTP_CODES.SUCCESS).send(room);
  }
}
