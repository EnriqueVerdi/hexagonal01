import { SenderEmailUseCase } from "../application/usecases/SenderEmailUseCase";
import { FakeEmailSender } from "./FakeEmailSender";
import { MemoryUserRepository } from "./repositories/MemoryUSerRepository";
import { UserController } from "./controllers/UserController";

const fakeEmailSender = new FakeEmailSender();
const memoryUserRepository = new MemoryUserRepository();
export const senderEmailUseCase = new SenderEmailUseCase(
  memoryUserRepository,
  fakeEmailSender
);
export const userController = new UserController(senderEmailUseCase);
