import { AWS } from "@serverless/typescript";
import createPetServerless from "./operations/createPet/serverless";
import deletePetServerless from "./operations/deletePet/serverless";
import getAllPetsServerless from "./operations/getAllPets/serverless";
import getPetServerless from "./operations/getPet/serverless";
import patchPetServerless from "./operations/patchPet/serverless";

const petServerless: AWS["functions"] = {
  createPet: createPetServerless,
  deletePet: deletePetServerless,
  patchPet: patchPetServerless,
  getPet: getPetServerless,
  getAllPets: getAllPetsServerless,
};

export default petServerless
