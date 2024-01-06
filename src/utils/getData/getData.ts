const getData = async (
  endpoint: string,
  headers: Record<string, string>,
  query: string
) => {
  const nonEmptyHeaders = Object.fromEntries(
    Object.entries(headers).filter(([, value]) => value !== '')
  );

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...nonEmptyHeaders,
    },
    mode: 'cors',
    body: query ? JSON.stringify({ query }) : undefined,
  });

  if (response.ok) {
    return await response.json();
  } else {
    const errorMessage = `${response.status} - ${response.statusText}`;
    throw new Error(errorMessage);
  }
};

export default getData;
