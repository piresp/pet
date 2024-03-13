import { handlerPath } from "@libs/handler-resolver";

const updateStaffServerless = {
  handler: `${handlerPath(__dirname)}/patchStaff.patchStaff`,
  events: [
    {
      http: {
        method: 'patch',
        path: '/staff/{id}',
      },
    },
  ],
};

export default updateStaffServerless;
