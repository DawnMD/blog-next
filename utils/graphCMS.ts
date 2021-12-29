import { GraphQLClient } from 'graphql-request';

const graphCMS = new GraphQLClient(process.env.CMS_ENDPOINT as string);

export default graphCMS;
