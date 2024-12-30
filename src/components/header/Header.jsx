import { useContext } from "react";
import Results from "../posts/Results";
import SearchPosts from "../posts/SearchPosts";
import { PostContext } from "../../App";

function Header() {
  //3 use Consu
  const { onClearPosts } = useContext(PostContext);

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
