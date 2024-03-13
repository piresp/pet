import { handlerPath } from "@libs/handler-resolver";

const patchPetServerless = {
  handler: `${handlerPath(__dirname)}/patchPet.patchPet`,
  events: [
    {
      http: {
        method: 'patch',
        path: '/pets/{id}',
      },
    },
  ],
};

export default patchPetServerless;
