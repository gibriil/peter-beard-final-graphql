# Tunnels & Trolls Shop Inventory -- Weapons, Armour, and Spells
## GraphQL CRUD Apollo Server for DGM 4790

For this project, I had to build GraphQL using Node, Prisma, and Apollo Server.  The API needed to allow users to Create, Read, Update, and Delete (CRUD) the items.  The server needed to implement the following items:

- [x] Prisma as your data modeling tool

    I'm use Prisma to model the data. You can find the schema in the [schema.prisma](https://github.com/gibriil/peter-beard-final-graphql/blob/master/prisma/schema.prisma) file. I'm also using nexus.js create documentation for a graphQL playground. The modal for nexus based on the Prisma schema can be fond in the [nexusModals.js](https://github.com/gibriil/peter-beard-final-graphql/blob/master/src/nexusModals.js) file.

- [x] Docker-based PostgreSQL, MySQL, or MongoDB as your data store

    I'm using a Docker container to house a PostgreSQL database. The process for installing this locally is listed in the [How to Use](https://github.com/gibriil/peter-beard-final-graphql#how-to-use) section of this readme.

- [x] At least 3 Query resolvers to get data from your server

    Because have 3 different data modals, there are more than 3 queries available. I'm using nexus.js to build out and easily document the queries for a graphQL playground. The source code for those quires can be found in the [query.js](https://github.com/gibriil/peter-beard-final-graphql/blob/master/src/query.js) file. Examples of implementing the query can be found in the [Using the GraphQL API](https://github.com/gibriil/peter-beard-final-graphql#3-using-the-graphql-api) section of this readme.

- [x] At least 2 Mutation resolvers allowing users to create, update, or upsert an item.

    There is a create and update mutation for each of the 3 modals. The source for those mutations can be found in the [mutation.js](https://github.com/gibriil/peter-beard-final-graphql/blob/master/src/mutation.js) file. Examples of implementing the mutations can be found in the [Using the GraphQL API](https://github.com/gibriil/peter-beard-final-graphql#3-using-the-graphql-api) section of this readme.

- [x] At least 1 Mutation resolver allowing users to delete an item.

    There is a delete mutation for each of the 3 modals. The source for the delete mutations can be found in the [mutation.js](https://github.com/gibriil/peter-beard-final-graphql/blob/master/src/mutation.js) file. Instructions for using the delete mutation can be found in can be found in the [Using the GraphQL API](https://github.com/gibriil/peter-beard-final-graphql#3-using-the-graphql-api) section of this readme.

- [x] Your datastore will contain at least 25 items

    Once the seed script is ran, you can use Prisma studio to view the contents of the seeded database. You can view the js files containing the objects that seed the database in [armour.js](https://github.com/gibriil/peter-beard-final-graphql/blob/master/prisma/seed-files/armour.js) for Armour, [spells.js](https://github.com/gibriil/peter-beard-final-graphql/blob/master/prisma/seed-files/spells.js) for Spells, and [weapons.js](https://github.com/gibriil/peter-beard-final-graphql/blob/master/prisma/seed-files/weapons.js) for weapons.

- [x] Your app will be deployable locally using Docker and will have seed data entered into the datastore.

    Instructions for downloading and deploying the locally can be found in the [How to Use](https://github.com/gibriil/peter-beard-final-graphql#how-to-use) section of this readme. The source for the seed file that will run for the seed script can be viewed in the [seed.js](https://github.com/gibriil/peter-beard-final-graphql/blob/master/prisma/seed.js) file.

- [x] All of your source code will be properly uploaded to GitHub

    Source code uses git version controlled and stored remotely on GitHub. [View repo](https://github.com/gibriil/peter-beard-final-graphql)

- [x] Your ReadMe file will accurately describe your server install and run process and how to use the APIs

    The ReadMe file source code can be viewed in the [README.md]() file. Instructions for installing the server can be found in the [How to Use](https://github.com/gibriil/peter-beard-final-graphql#how-to-use) section and the API instructions can be found in the [Using the GraphQL API](https://github.com/gibriil/peter-beard-final-graphql#3-using-the-graphql-api) section of this readme.

## How to use

### 1. Download example & install dependencies

Clone this repository:

```
git clone https://github.com/gibriil/peter-beard-final-graphql
```

Change into project's root directory and install:

```
cd peter-beard-final-graphql
npm install
```

Note that this also generates Prisma Client JS into `node_modules/@prisma/client` via a `postinstall` hook of the `@prisma/client` package from your `package.json`.

<Details><Summary><strong>Follow these steps to start/restart from scratch</strong></Summary>

If you have an existing Docker container running and want to restart from scratch, run the `nuke` npm script:

```
npm run nuke
```

Create a new database instance and migrate it by running the `migrateDB` npm script:

```
npm run migrateDB
```

Generate the Prisma Client code by running the `generate` npm script:

```
npm run generate
```

Seed the database by running the `seed` npm script:

```
npm run seed
```
</Details>

### 2. Start the GraphQL server

Launch the GraphQL server with this command:

```
npm start
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of this GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).

### 3. Using the GraphQL API

The schema that specifies the API operations of the GraphQL server is defined in [`schema.graphql`](https://github.com/gibriil/peter-beard-final-graphql/blob/master/src/generated/schema.graphql). Below are a number of operations that you can send to the API using the GraphQL Playground.

Feel free to adjust any operation by adding or removing fields. The GraphQL Playground helps you with its auto-completion and query validation features.

#### Retrieve all Weapons with their name, cost, and weight

```graphql
query allWeapons {
  Weapons {
    id,
    name,
    cost,
    weight
  }
}
```
#### Retrieve all Armour with their name, cost, and weight

```graphql
query allArmour {
  AllArmour {
    id,
    name,
    cost,
    weight
  }
}
```

#### Retrieve all Spells with their name and level

```graphql
query allSpells {
  Spells {
    id,
    name,
    level
  }
}
```

<Details><Summary><strong>See more API operations</strong></Summary>

#### Create a new course

```graphql
mutation createCourse {
  createCourse(name: "My course",
    description: "My course description",
  defaultCredits: "3",
  courseCode: "DGM 9000",
  termsOffered: "Fall, Spring") {
    id
    createdAt
    name
  }
}
```

#### Update a course

```graphql
mutation updateCourse {
  updateCourse(id: __ITEM_ID__,
    name: "Updated course",
    description: "My updated course description",
  defaultCredits: "3",
  courseCode: "DGM 9000",
  termsOffered: "Fall, Spring") {
    id
    createdAt
    name
  }
}
```

#### Delete a specific course by id

```graphql
mutation deleteOneCourse {
  deleteOneCourse(where: {
    id: __ITEM_ID__
  }) {
    id
    name
  }
}
```

> **Note**: You need to replace the `__ITEM_ID__` placeholder with an actual `id` from an item. You can find one e.g. using the query to list all of the given items.


</Details>
