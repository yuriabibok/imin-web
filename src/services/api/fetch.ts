export const getJson = async (url: string): Promise<any> => {
  const response = await fetch(url, {
    method: 'GET',
  });

  return response.json();
};

export const postJson = async (url: string, body: string): Promise<any> => {
  const response = await fetch(url, {
    method: 'POST',
    body,
  });

  return response.json();
};
