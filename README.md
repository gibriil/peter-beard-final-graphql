# Tunnels & Trolls Character Shop Inventory -- Weapons, Armour, and Spells
## GraphQL CRUD Apollo Server for DGM 4790

For this project, I had to build GraphQL using Node, Prisma, and Apollo Server.  The API needed to allow users to Create, Read, Update, and Delete (CRUD) the items.  The server needed implement the following items:

- [x] Prisma as your data modeling tool
- [x] Docker-based PostgreSQL, MySQL, or MongoDB as your data store
- [x] At least 3 Query resolvers to get data from your server
- [x] At least 2 Mutation resolvers allowing users to create, update, or upsert an item.
- [x] At least 1 Mutation resolver allowing users to delete an item.
- [x] Your datastore will contain at least 25 items
- [x] Your app will be deployable locally using Docker and will have seed data entered into the datastore.
- [x] All of your source code will be properly uploaded to GitHub
- [x] Your ReadMe file will accurately describe your server install and run process and how to use the APIs

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

Create a new database instance and migrate it by running the `createDB` npm script:

```
npm run createDB
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

Launch your GraphQL server with this command:

```
npm start
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).

### 3. Using the GraphQL API

The schema that specifies the API operations of your GraphQL server is defined in [`./schema.graphql`](./schema.graphql). Below are a number of operations that you can send to the API using the GraphQL Playground.

Feel free to adjust any operation by adding or removing fields. The GraphQL Playground helps you with its auto-completion and query validation features.

#### Retrieve all courses with their name, course code and description

```graphql
query allCourses {
  Courses {
    id
    name
    courseCode
    description
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
  updateCourse(id: __COURSE_ID__,
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
    id: __COURSE_ID__
  }) {
    id
    name
  }
}
```

> **Note**: You need to replace the `__COURSE_ID__` placeholder with an actual `id` from a `Course` item. You can find one e.g. using the `allCourses` query.

#### Search for courses with a specific string found in the name or description

```graphql
query filterCourses {
  Courses(searchString: "DGM") {
    id
    name
    courseCode
    description
  }
}
```

#### Retrieve a single course by its id

```graphql
query oneCourse {
  Course(id: __COURSE_ID__) {
    name
    description
    id
  }
}
```

> **Note**: You need to replace the `__COURSE_ID__` placeholder with an actual `id` from a `Course` item. You can find one e.g. using the `allCourses` query.

</Details>
