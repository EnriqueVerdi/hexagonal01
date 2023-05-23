import { SenderMessageUseCase } from "../application/SenderMessageUseCase";
import { FakeCellphoneSender } from "./FakeCellphoneSender";
import { MemoryMallRepository } from "./MemoryMallRespository";
import { MallController } from "./MallController";

const fakeCellphoneSender = new FakeCellphoneSender();
const memoryMallRepository = new MemoryMallRepository();
export const senderMessageUseCase = new SenderMessageUseCase(
    memoryMallRepository,
    fakeCellphoneSender
);
export const mallController = new MallController(senderMessageUseCase);
