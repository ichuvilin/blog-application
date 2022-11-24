import React, { useEffect, useMemo, useState } from "react";
import NavBar from "./components/navbar/NavBar";
import { fetchAllNews } from "./http/newsAPI";
import { Context } from "./context/context";
import NewsList from "./components/news/NewsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsPage from "./components/news/NewsPage";

function App() {
  const [news, setNews] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetchAllNews().then((data) => setNews(data));
  }, []);

  useMemo(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "rgb(240, 231, 219)" : "rgb(32, 32, 35)";
  }, [theme]);

  return (
    <Context.Provider value={{ theme, setTheme, news }}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<NewsList />} />
            <Route path="/:id" element={<NewsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
