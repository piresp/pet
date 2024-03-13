import { handlerPath } from "@libs/handler-resolver";

const getAllUsersServerless = {
  handler: `${handlerPath(__dirname)}/getAllUsers.getAllUsers`,
  events: [
    {
      http: {
        method: 'get',
        path: '/users',
      },
    },
  ],
};

export default getAllUsersServerless;
