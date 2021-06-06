import { RouteHandlerMethod } from "fastify";
import { prisma } from "../helpers/utils";

export const getAllUsers: RouteHandlerMethod = async (request, response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });
    return response.send({ data: users });
  } catch (error) {
    console.error(error);
    response.status(500).send({ error: "Cannot fetch users" });
  }
};
