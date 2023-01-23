import { RoomController } from '../controllers/room.controller';
import { Router } from 'express';

export class RoomRoute {
  router: Router = Router();

  private roomController = new RoomController();

  constructor() {
    this.routes();
  }

  private routes() {
    this.router.patch('/update-status', this.roomController.updateRoomStatus);
    this.router.get('/available/:name', this.roomController.getRoomAvailableByName);
    this.router.get('/available', this.roomController.getRoomsAvailable);
    this.router.get('/:name', this.roomController.getRoomByName);
    this.router.post('/', this.roomController.addRoom);
  }
}
