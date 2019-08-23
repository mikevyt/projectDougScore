import { GraphQLList } from 'graphql';
import rentalVehicles from './db';

import RentalVehicleType from './models/RentalVehicle';

const rentalVehicleQueries = {
    rental_vehicles: {
        type: new GraphQLList(RentalVehicleType),
        resolve: () => {
            return rentalVehicles;
        }
    }
};

export default rentalVehicleQueries;
