import { User } from "../../domain/entities/User";
import { UserRepository } from '../../domain/repositories/UserRepository';

export class CreateUserUseCase{
    constructor(readonly userRepository: UserRepository){} 
    async run(user: User){
        await this.userRepository.createUser(user);
    }
}