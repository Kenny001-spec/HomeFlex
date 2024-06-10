const API_URL = "http://localhost:5000/api/properties";

export const getAllProperties = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Network response failed");
  }
  return response.json();
}

export const addProperty = async (property) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(property)
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
