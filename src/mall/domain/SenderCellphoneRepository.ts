export interface SenderCellphoneRepository {
    send(cellphone: string, msn: string): Promise<void>;
  }
  