// TODO: see if this can be improved
const MutationType = `
    type Mutation {
        createVehicle(
            id: ID!
            year: Int!
            make: String!
            model: String!
            color: String!
            rentalPrice: Float!
            imageURL: String
            description: String
        ): Vehicle
        
        updateVehicle(
            id: ID!
            year: Int
            make: String
            model: String
            color: String
            rentalPrice: Float
            imageURL: String
            description: String
        ): Vehicle
        
        deleteVehicle(id: ID!): Vehicle
    }
`;

export default MutationType;
