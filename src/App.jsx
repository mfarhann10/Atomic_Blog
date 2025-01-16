import { useEffect, useMemo, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/posts/Main";
import Archive from "./Archive/Archive";
import { PostProvider, usePosts } from "./components/posts/PostContext";
//import { faker } from "@faker-js/faker";

/* function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
} */

function AppContent() {
  const { posts } = usePosts();

  const [isFakeDark, setIsFakeDark] = useState(false);
  // Toggle the `fake-dark-mode` class on the HTML element
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode", isFakeDark);
    },
    [isFakeDark]
  );

  const archiveOptions = useMemo(() => {
    return {
      show: false,
      title: `Post Archive (${posts.length})`,
    };
  }, [posts.length]);

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <Header />
      <Main />
      <Archive archiveOptions={archiveOptions} />
      <Footer />
    </section>
  );
}

function App() {
  return (
    <PostProvider>
      <AppContent />
    </PostProvider>
  );
}

export default App;
