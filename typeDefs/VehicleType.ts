const VehicleType = `
    type Vehicle {
        licensePlate: String!
        year: Int!
        make: String!
        model: String!
        color: String!
        rentalPrice: Float!
        dougScore: Int!
        description: String
        isDeleted: Boolean
    }
`;

export default VehicleType;
