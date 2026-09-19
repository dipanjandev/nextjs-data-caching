import React from "react";

// const postPromise = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

// This is another option to get data from server

// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

const getPosts = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  } catch (error) {
    throw new Error("Failed To load data");
  }
};

const PostPage = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await res.json();

  //   const data = await postPromise(); //This is for Outer Function

  const data = await getPosts();

  return (
    <div>
      <h1>Here is {data.length} person Post</h1>
    </div>
  );
};

export default PostPage;
