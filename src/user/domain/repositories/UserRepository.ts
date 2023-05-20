import { User } from "../entities/User";

export interface UserRepository {
  getById(userId: string): Promise<User | null>;
  createUser(user: User): Promise<User | null>;
}
