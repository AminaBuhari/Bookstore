// ////////////// Api request
const appID = 'Z7rfT95CL2ym4MuUBzrI';
const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books`;

// ////////////// Create objects
const postBooks = async (id, title, author) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category: 'default',

    }),
  });
  const data = await response.status;
  return data;
};

// /////////////////// Delete Books
const deleteBooks = async (id) => {
  await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
};

const getData = async () => {
  const response = await fetch(baseURL);
  return response.json();
};

export { deleteBooks, postBooks, getData };
