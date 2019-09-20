// TODO: see if this can be improved
const MutationType = `
    type Mutation {
        createVehicle(
            licensePlate: String!
            year: Int!
            make: String!
            model: String!
            color: String!
            rentalPrice: Float!
            dougScore: Int!
            description: String
        ): Vehicle
        
        updateVehicle(
            licensePlate: String!
            year: Int
            make: String
            model: String
            color: String
            rentalPrice: Float
            dougScore: Int
            description: String
        ): Vehicle
        
        deleteVehicle(licensePlate: String!): String
    }
`;

export default MutationType;
