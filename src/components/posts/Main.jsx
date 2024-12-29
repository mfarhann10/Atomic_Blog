import FormAddPost from "./FormAddPost";
import Posts from "./Posts";

/* eslint-disable react/prop-types */
function Main({ posts, onAddPost }) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}

export default Main;
