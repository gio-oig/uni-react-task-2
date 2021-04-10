const getPosts = async ({ limit = 0 }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
  );
  const data = await res.json();
  return data;
};

const postApi = { getPosts };

export default postApi;
