import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
        .catch(error => console.log(error));
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id)
        .catch(error => console.log(error));
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body)
        .catch(error => console.log(error));
    }

    async update(request: Request, response: Response, next: NextFunction) {
        console.log(request.body)
        const results = this.userRepository.update({user_id: request.params.user_id}, {
            username: request.body.username,
            group_id: request.body.group_id
        }).catch((error) => console.log(error))
        return results;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.user_id)
        .catch(error => console.log(error));
        console.log(userToRemove);
        // const results = await this.userRepository.remove(userToRemove);
        // return {status: "success", deleted:results};
    }

}