// lib/app.ts
import express = require('express');
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';

// Create a new express application instance
const app: express.Application = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.use('/', function (req, res) {
    res.json('Go to /graphql to test your queries and mutations!');
});

const server = app.listen(3000, function () {
    console.info(`Server listening on port 3000!`);
});
