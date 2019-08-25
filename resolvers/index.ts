import { vehicleQueries, vehicleMutations } from './vehicles';

const resolvers = {
    Query: {
        ...vehicleQueries
    },
    Mutation: {
        ...vehicleMutations
    }
};

export default resolvers;
