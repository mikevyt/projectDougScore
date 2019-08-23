import {
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLString,
    GraphQLEnumType,
    GraphQLObjectType
} from 'graphql';

const RentalVehicle = new GraphQLObjectType({
    name: 'RentalVehicle',
    description: 'RentalVehicle type definition',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        vehicle_id: {
            type: GraphQLInt,
        },
        vin: {
            type: GraphQLString,
        },
        year: {
            type: GraphQLInt,
        },
        mileage: {
            type: GraphQLInt,
        },
        exterior_color: {
            type: GraphQLString,
        },
        interior_color: {
            type: GraphQLString,
        },
        interior_material: {
            type: new GraphQLEnumType({
                name: 'interior_material',
                values: {
                    CLOTH: { value: 0 },
                    LEATHER: { value: 1 },
                }
            })
        },
        keys: {
            type: GraphQLInt,
        },
        fuel_percentage: {
            type: GraphQLInt,
        },
        rental_price: {
            type: GraphQLFloat,
        },
        description: {
            type: GraphQLString,
        },
    })
});

export { RentalVehicle };
