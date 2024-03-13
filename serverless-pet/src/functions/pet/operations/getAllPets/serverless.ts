import { handlerPath } from "@libs/handler-resolver";

const getAllPetsServerless = {
  handler: `${handlerPath(__dirname)}/getAllPets.getAllPets`,
  events: [
    {
      http: {
        method: 'get',
        path: '/pets',
        cors: true
      },
    },
  ],
};

export default getAllPetsServerless;
