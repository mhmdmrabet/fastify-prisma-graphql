import { RouteOptions } from "fastify";
import * as controllers from "./../controllers";

type RouteConfig = Record<string, RouteOptions>;

const routes: RouteConfig = {
  getAllUsers: {
    method: "GET",
    url: "/users",
    handler: controllers.getAllUsers,
  },
};

export const renderRoutes = Object.values(routes);
