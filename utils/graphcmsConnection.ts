import { GraphQLClient } from 'graphql-request';

export const graphcmsConnection = new GraphQLClient(
  process.env.CMS_ENDPOINT as string,
  {
    headers: {
      Authorization: `Bearer ${process.env.CMS_TOKEN as string}`,
    },
  }
);
