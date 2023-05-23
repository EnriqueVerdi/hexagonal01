import { SenderCellphoneRepository } from "../domain/SenderCellphoneRepository";
export class FakeCellphoneSender implements SenderCellphoneRepository {
  async send(cellphone: string, msn: string): Promise<void> {
    console.log(`Simulating Cellphone to ${cellphone}`);
  }
}
