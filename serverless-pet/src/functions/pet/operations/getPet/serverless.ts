import { handlerPath } from "@libs/handler-resolver";

const getPetServerless = {
  handler: `${handlerPath(__dirname)}/getPet.getPet`,
  events: [
    {
      http: {
        method: 'get',
        path: '/pets/{id}',
      },
    },
  ],
};

export default getPetServerless;
