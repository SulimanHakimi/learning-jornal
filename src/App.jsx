import News from "./components/posts/news";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/404/notFound";
import SingleNews from "./components/posts/singleNews";
import Nav from "./components/ui/nav";
import Footer from "./components/ui/footer";
import Home from "./components/home/home";
import axios from "axios";

import { useEffect, useState } from "react";

function App() {
  const API_KEY = "598a19e833ba43f8b7f1f8a6533aefcf";
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/everything?q=afghanistan&apiKey=${API_KEY}`)
      .then((data) => setData(data.data));
  }, []);
  return (
    <div className="App">
        <BrowserRouter>
          <div className="min-h-screen">
            <Nav />
            <Routes>
              <Route>
                <Route path="/" element={<Home data={data?.articles[0]} />} />
                <Route path="/news" element={<News data={data?.articles} />} />
                <Route path="/news/:id" element={<SingleNews data={data?.articles} />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
