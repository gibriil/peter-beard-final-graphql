import {
    nexusPrismaPlugin
} from 'nexus-prisma';
import {
    makeSchema
} from 'nexus';
import {
    Query
} from './query.js';
import {
    Models
} from './nexusModals.js';

export const schema = makeSchema({
    types: [Query, ...Models],
    plugins: [nexusPrismaPlugin()],
    outputs: {
        schema: __dirname + '/generated/schema.graphql',
        typegen: __dirname + '/generated/nexus.ts',
    },
    typegenAutoConfig: {
        contextType: 'Context.Context',
        sources: [{
                source: '@prisma/client',
                alias: 'prisma',
            },
            {
                source: require.resolve('./prismaContext'),
                alias: 'Context'
            }
        ]
    }
})