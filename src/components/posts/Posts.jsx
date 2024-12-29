import List from "./List";

/* eslint-disable react/prop-types */
function Posts({ posts }) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

export default Posts;
