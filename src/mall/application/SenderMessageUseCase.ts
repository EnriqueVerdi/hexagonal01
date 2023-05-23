import { SenderCellphoneRepository } from "../domain/SenderCellphoneRepository";
import { MallRepository } from "../domain/MallRepository";

export class SenderMessageUseCase {
  constructor(
    readonly mallRepository: MallRepository,
    readonly senderCellphoneRepository: SenderCellphoneRepository
  ) {}

  async run(mallId: string) {
    const mall = await this.mallRepository.getById(mallId);
    if (!mall) throw new Error("Tienda no encontrada");

    await this.senderCellphoneRepository.send(
      mall.cellphone,
      "Welcome to our application!!"
    );
  }
}
