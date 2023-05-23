import { Request, Response } from "express";

import { SenderMessageUseCase } from "../application/SenderMessageUseCase";

export class MallController {
  constructor(readonly senderMessageUseCase: SenderMessageUseCase) {}

  async run(req: Request, res: Response) {
    const userId = req.params.id;

    await this.senderMessageUseCase.run(userId);
    res.status(200).send();
  }
}
