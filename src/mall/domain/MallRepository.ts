import { Mall } from "./Mall";

export interface MallRepository {
  getById(mallId: string): Promise<Mall | null>;
}
