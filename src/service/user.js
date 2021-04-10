const getUsers = async ({ limit = 5 }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?_limit=${limit}`,
  );
  const data = await res.json();
  return data;
};

const userApi = { getUsers };

export default userApi;
