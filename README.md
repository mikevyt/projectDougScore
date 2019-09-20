# Start
To start the GraphQL server, run the following in the `/projectDougScore` directory:

`npm run dev`

The server will be up on `localhost:4000` or another available port.

# Queries
## vehicles { Vehicle }
Returns all vehicles that have not been deleted.

## vehicle(licensePlate: string) { Vehicle }
Returns the vehicle that has the given licensePlate. 

# Mutations

## createVehicle( Vehicle ) { Vehicle }
Creates a vehicle with the provided arguments.

## updateVehicle(licensePlate: string, fields) { Vehicle }
Updates the vehicle with the provided license plate to the fields provided.

## deleteVehicle(licensePlate: string) { string }
Deletes the vehicle with the provided license plate. 
(Adds isDeleted flag instead of permadelete)

# Models

## Vehicle
### licensePlate: String!
### year: Int!
### make: String!
### model: String!
### color: String!
### rentalPrice: Float!
### dougScore: Int!
### description: String
### isDeleted: Boolean
