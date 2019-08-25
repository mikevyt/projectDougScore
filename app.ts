require('dotenv').config();

import { ApolloServer, gql } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Server listening at ${url}`);
});
