import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._users = []
        // this._users = [
        //     {user_id: 1, username: 'KKrolik', created: '2022-03-24T12:15:15.149Z', group_id: 1}
        // ]
        makeAutoObservable(this);
    }

    setUsers(users) {
        this._users = users 
    }

    get users() {
        return this._users
    }
}