import { handlerPath } from "@libs/handler-resolver";

const loginStaffServerless = {
  handler: `${handlerPath(__dirname)}/loginStaff.loginStaff`,
  events: [
    {
      http: {
        method: 'post',
        path: '/staff/login',
      },
    },
  ],
};

export default loginStaffServerless;
