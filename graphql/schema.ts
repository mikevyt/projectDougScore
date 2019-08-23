import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import rentalVehicleQueries from './rentalVehicles';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            ...rentalVehicleQueries
        })
    }),
});
