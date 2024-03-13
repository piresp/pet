import { handlerPath } from "@libs/handler-resolver";

const getUserServerless = {
  handler: `${handlerPath(__dirname)}/getUser.getUser`,
  events: [
    {
      http: {
        method: 'get',
        path: '/users/{id}',
      },
    },
  ],
};

export default getUserServerless;
