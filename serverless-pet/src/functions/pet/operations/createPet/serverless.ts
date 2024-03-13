import { handlerPath } from "@libs/handler-resolver";

const createPetServerless = {
  handler: `${handlerPath(__dirname)}/createPet.createPet`,
  events: [
    {
      http: {
        method: 'post',
        path: '/pets',
      },
    },
  ],
};

export default createPetServerless;
