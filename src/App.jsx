import { useState, createContext } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BrowseArticles from "./components/BrowseArticles";
import { Route, Routes } from "react-router-dom";
import IndividualArticle from "./components/IndividualArticle";
import Users from "./components/Users";
import SortArticles from "./components/SortArticles";



export const UserContext = createContext()

function App() {
  
  const [signedIn, setSignedIn] = useState('')

  return (
    <>
    <UserContext.Provider value={[signedIn, setSignedIn]}>
      <div className="App">
        <Header  />
        <NavBar name={signedIn}/>
        <div className="Content">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/articles" element={<SortArticles/>} />
            <Route path="/articles/:topic" element={<SortArticles />} />
            <Route path="/articles/article/:article_id" element={<IndividualArticle />} />
            <Route path="/users" element={<Users/>} />
            
          </Routes>
        </div>
      </div></UserContext.Provider>
    </>
  );
}

export default App;
