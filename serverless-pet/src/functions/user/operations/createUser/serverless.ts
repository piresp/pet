import { handlerPath } from "@libs/handler-resolver";

const createUserServerless = {
  handler: `${handlerPath(__dirname)}/createUser.createUser`,
  events: [
    {
      http: {
        method: 'post',
        path: '/users',
      },
    },
  ],
};

export default createUserServerless;
