import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import BrowseArticles from "./components/BrosweArticles";
import { Route, Routes } from "react-router-dom";
import IndividualArticle from "./components/IndividualArticle";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <NavBar />

        <div className="Content">
          <Routes>
            <Route path="/" element={<BrowseArticles />} />
            <Route path="/article/:article_id" element={<IndividualArticle />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
