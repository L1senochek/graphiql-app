const schemaQuery = `
  query IntrospectionQuery {
    __schema {
      types {
        name
        kind
        description
        fields {
          name
          type {
            name
            kind
            ofType {
              name
              kind
            }
          }
        }
      }
    }
  }
`;

const getSchema = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: schemaQuery }),
    });

    return await response.json();
  } catch (error) {
    console.error('getSchema Error:', error);
  }
};

export default getSchema;
