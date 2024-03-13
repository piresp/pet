import { AWS } from "@serverless/typescript";

const esbuild: AWS["custom"] = {
  esbuild: {
    bundle: true,
    minify: false,
    sourcemap: true,
    exclude: ['aws-sdk'],
    target: 'node16',
    define: { 'require.resolve': undefined },
    platform: 'node',
    concurrency: 10,
  },
};

export default esbuild;
