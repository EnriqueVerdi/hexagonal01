import { SenderEmailRepository } from "../domain/repositories/SenderEmailRepository";
export class FakeEmailSender implements SenderEmailRepository {
  async send(email: string, msn: string): Promise<void> {
    console.log(`Simulating email to ${email}`);
  }
}
