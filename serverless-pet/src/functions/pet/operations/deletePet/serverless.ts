import { handlerPath } from "@libs/handler-resolver";

const deletePetServerless = {
  handler: `${handlerPath(__dirname)}/deletePet.deletePet`,
  events: [
    {
      http: {
        method: 'delete',
        path: '/pets/{id}',
      },
    },
  ],
};

export default deletePetServerless;
