import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { Group } from "../entity/Group"

export class GroupController {

    private groupRepository = getRepository(Group)

    async all(request: Request, response: Response, next: NextFunction) {
        const results = this.groupRepository.find()
        .catch(error => console.log(error));
        return results;
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const results = this.groupRepository.findOne(request.params.goup_id)
        .catch(error => console.log(error));
        return results;
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const results = this.groupRepository.save(request.body)
        .catch(error => console.log(error));
        return results;
    }

    async update(request: Request, response: Response, next: NextFunction) {
        
        const results = this.groupRepository.update({group_id: request.params.group_id}, {
            name: request.body.name,
            description: request.body.description
        }).catch(error => console.log(error));
        return results;
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.groupRepository.findOne({ group_id: request.params.group_id })
        const results = await this.groupRepository.remove(userToRemove)
        .catch(error => console.log(error))
        return {status: "success", deleted:results};
    }

}