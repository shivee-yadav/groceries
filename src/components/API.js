
const API_URL = 'https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s';

export const fetchProducts = async (category) => {
  const response = await fetch(`${API_URL}?category=${category}`);
  const data = await response.json();
  return data;
};
