import { handlerPath } from "@libs/handler-resolver";

const createStaffServerless = {
  handler: `${handlerPath(__dirname)}/createStaff.createStaff`,
  events: [
    {
      http: {
        method: 'post',
        path: '/staff',
      },
    },
  ],
};

export default createStaffServerless;
