import { handlerPath } from "@libs/handler-resolver";

const deleteUserServerless = {
  handler: `${handlerPath(__dirname)}/deleteUser.deleteUser`,
  events: [
    {
      http: {
        method: 'delete',
        path: '/users/{id}',
      },
    },
  ],
};

export default deleteUserServerless;
