import AboutMe from "./components/pages/aboutMe";
import HomePage from "./components/pages/homePage";
import LoginFigma from "./components/pages/loginFigma";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound";
import RecentPost from "./components/recentPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
          <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<LoginFigma />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/card/:id" element={<RecentPost/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
