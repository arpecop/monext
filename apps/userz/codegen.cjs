module.exports = {
  schema: [
    {
      "http://wasp.local:8080/v1/graphql": {
        headers: {
          "x-hasura-role": "user",
          "x-hasura-admin-secret": "",
        },
      },
    },
  ],

  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
