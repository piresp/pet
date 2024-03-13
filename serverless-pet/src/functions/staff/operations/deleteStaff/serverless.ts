import { handlerPath } from "@libs/handler-resolver";

const deleteStaffServerless = {
  handler: `${handlerPath(__dirname)}/deleteStaff.deleteStaff`,
  events: [
    {
      http: {
        method: 'delete',
        path: '/staff/{id}',
      },
    },
  ],
};

export default deleteStaffServerless;
