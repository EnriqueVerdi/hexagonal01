import { Mall } from "../domain/Mall";
import { MallRepository } from "../domain/MallRepository";

const malls: Mall[] = [
  {
    id: "1",
    cellphone: "9616035773",
  },
  {
    id: "2",
    cellphone: "9993332221",
  },
];
export class MemoryMallRepository implements MallRepository {
  async getById(mallId: string): Promise<Mall | null> {
    const mall = malls.find((mall) => mall.id === mallId) as Mall;

    if (!mall) return null;
    return new Mall(mall.id, mall.cellphone);
  }
}

