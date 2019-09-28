import { Request, Response } from 'express';
import { Demo } from '../models/demoModel';

export class DemoControllers {

  public getDemo (req: Request, res: Response) {
    return res.send('Hello');
  }

  public async addDemo (req: Request, res: Response) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    try {
      const demo = new Demo();
      demo.firstName = firstName;
      demo.lastName = lastName;

      await demo.save();

      return res.status(201).json({
        status: 200,
        data: demo,
        message: 'Thành công!'
      });
    }
    catch (e) {
      console.log(e);
    }
  }
}
