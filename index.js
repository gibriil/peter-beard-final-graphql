import {
    ApolloServer
} from 'apollo-server';
import {
    createContext
} from './src/prismaContext.js';
import {
    schema
} from './src/schema.js';

const PORT = process.env.PORT || 4000;

new ApolloServer({
    schema,
    context: createContext(),
    introspection: true,
    playground: true
}).listen({
    port: PORT
}, () => {
    console.log(`GraphQL Playground running on http://localhost:${PORT}`);
});