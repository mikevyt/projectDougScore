const QueryType = `
    type Query {
        vehicles: [Vehicle]
        vehicle(id: Int!): Vehicle 
    }
`;

export default QueryType;
