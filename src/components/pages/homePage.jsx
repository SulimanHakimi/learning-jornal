import Footer from "./components/footer";
import Home from "./components/home";
import Nav from "./components/nav";
import Post from "./components/post";

function HomePage() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Post />
      <Footer />
    </div>
  );
}

export default HomePage;