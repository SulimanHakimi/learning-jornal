import AboutMe from "./components/pages/aboutMe";
import HomePage from "./components/pages/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
          <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
