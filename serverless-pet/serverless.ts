import esbuild from '@custom/esbuild';
import petServerless from '@functions/pet/serverless';
import staffServerless from '@functions/staff/serverless';
import userServerless from '@functions/user/serverless';
import provider from '@provider/provider';
import petTable from '@schemas/petTable';
import staffTable from '@schemas/staffTable';
import userTable from '@schemas/userTable';
import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'serverless-fatec',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    ...provider
  },

  resources: {
    Resources: {
      ...userTable,
      ...petTable,
      ...staffTable
    },
  },

  functions: { 
    ...userServerless,
    ...petServerless,
    ...staffServerless
  },

  package: { individually: true },
  custom: {
      ...esbuild
  },
};

module.exports = serverlessConfiguration;
