import { GraphQLClient } from 'graphql-request';

const graphCMS = new GraphQLClient(process.env.CMS_ENDPOINT as string, {
  headers: {
    Authorization: `Bearer ${process.env.CMS_TOKEN}`,
  },
});

export default graphCMS;
