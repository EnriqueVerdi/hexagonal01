import { SenderEmailRepository } from "../../domain/repositories/SenderEmailRepository";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class SenderEmailUseCase {
  constructor(
    readonly userRepository: UserRepository,
    readonly senderEmailRepository: SenderEmailRepository
  ) {}

  async run(userId: string) {
    const user = await this.userRepository.getById(userId);
    if (!user) throw new Error("Usuario no encontrado");

    await this.senderEmailRepository.send(
      user.email,
      "Welcome to our application!!"
    );
  }
}
