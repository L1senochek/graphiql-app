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
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: schemaQuery }),
  });

  if (response.ok) {
    return await response.json();
  } else {
    const errorMessage = `${response.status} - ${response.statusText}`;
    throw new Error(errorMessage);
  }
};

export default getSchema;
