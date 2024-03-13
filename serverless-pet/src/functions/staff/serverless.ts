import { AWS } from "@serverless/typescript";
import createStaffServerless from "./operations/createStaff/serverless";
import deleteStaffServerless from "./operations/deleteStaff/serverless";
import loginStaffServerless from "./operations/loginStaff/serverless";
import updateStaffServerless from "./operations/patchStaff/serverless";

const staffServerless: AWS["functions"] = {
  createStaff: createStaffServerless,
  deleteStaff: deleteStaffServerless,
  updateStaff: updateStaffServerless,
  loginStaff: loginStaffServerless
};

export default staffServerless
