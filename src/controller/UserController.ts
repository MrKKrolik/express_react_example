import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.update({user_id: request.params.user_id}, {
            username: request.body.username,
            group_id: request.body.group_id
        }).catch((error) => console.log(error)
        );
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.user_id);
        const results = await this.userRepository.remove(userToRemove);
        return {status: "success", deleted:results};
    }

}