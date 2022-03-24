import Groups from "./pages/Groups";
import Users from "./pages/Users";

export const publicRoutes = [
    {
        path: '/users',
        Component: Users
    }, {
        path: '/groups',
        Component: Groups
    }
]