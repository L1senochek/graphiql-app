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

const getSchema = async (endpoint: string, headers: Record<string, string>) => {
  const nonEmptyHeaders = Object.fromEntries(
    Object.entries(headers).filter(([, value]) => value !== '')
  );

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...nonEmptyHeaders,
    },
    body: JSON.stringify({ query: schemaQuery }),
  });

  return await response.json();
};

export default getSchema;
