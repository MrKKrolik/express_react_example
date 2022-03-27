import { UserController } from "../controller/UserController"

export const userRoutes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:user_id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "put",
    route: "/users/:user_id",
    controller: UserController,
    action: "update"
}, {
    method: "delete",
    route: "/users/:user_id",
    controller: UserController,
    action: "remove"
}]