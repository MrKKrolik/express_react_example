import { GroupController } from "../controller/GroupController"

export const groupRoutes = [{
    method: "get",
    route: "/groups",
    controller: GroupController,
    action: "all"
}, {
    method: "get",
    route: "/groups/:group_id",
    controller: GroupController,
    action: "one"
}, {
    method: "post",
    route: "/groups",
    controller: GroupController,
    action: "save"
}, {
    method: "put",
    route: "/groups/:group_id",
    controller: GroupController,
    action: "update"
}, {
    method: "delete",
    route: "/groups/:group_id",
    controller: GroupController,
    action: "remove"
}]