import { handlerPath } from "@libs/handler-resolver";

const updateUserServerless = {
  handler: `${handlerPath(__dirname)}/patchUser.patchUser`,
  events: [
    {
      http: {
        method: 'patch',
        path: '/users/{id}',
      },
    },
  ],
};

export default updateUserServerless;
