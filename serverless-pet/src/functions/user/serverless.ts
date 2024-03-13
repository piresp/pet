import { AWS } from "@serverless/typescript";
import createUserServerless from "./operations/createUser/serverless";
import deleteUserServerless from "./operations/deleteUser/serverless";
import patchUserServerless from "./operations/patchUser/serverless";
import getAllUsersServerless from "./operations/getAllUsers/serverless";
import getUserServerless from "./operations/getUser/serverless";

const userServerless: AWS["functions"] = {
    createUser: createUserServerless,
    deleteUser: deleteUserServerless,
    patchUser: patchUserServerless,
    getAllUsers: getAllUsersServerless,
    getUser: getUserServerless
};

export default userServerless
