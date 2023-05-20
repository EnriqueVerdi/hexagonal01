import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class MysqlUserRepository implements UserRepository{
    async getById(userId: string): Promise<User | null> {
        console.log("user found");
        return null;
    }
    async createUser(user: User): Promise<User | null> {
        console.log("user created");
        return null;
    }
}