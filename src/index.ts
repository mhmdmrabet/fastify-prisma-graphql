import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function main() {
//   await prisma.user.create({
//     data: {
//       name: "Mohamed",
//       email: "mohamed@prisma.com",
//       posts: {
//         create: { title: "Hi, Every body!" },
//       },
//       profile: {
//         create: {
//           bio: "I like turtles",
//         },
//       },
//     },
//   });

//   const allUser = await prisma.user.findMany({
//     include: {
//       posts: true,
//       profile: true,
//     },
//   });

//   console.dir(allUser, { depth: null });
// }

// async function main() {
//   const post = await prisma.post.update({
//     where: { id: 1 },
//     data: { published: true },
//   });

//   console.log(post);
// }

async function main() {}

main()
  .catch((error) => {
    throw error;
  })
  .finally(async () => await prisma.$disconnect());
