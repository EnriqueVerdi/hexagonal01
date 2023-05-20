import { Request, Response } from "express";
import { CreateUserUseCase } from '../../application/usecases/CreateUserUseCase';
import { User } from "../../domain/entities/User";

export class CreateUserController {
  constructor(readonly createUserUseCase: CreateUserUseCase) {}


  async run(req: Request, res: Response) {
    const user = req.body;
    await this.createUserUseCase.run(new User(user.id, user.email));
    res.status(200).send();
  }
}
