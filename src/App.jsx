import "./App.css";
import { SearchBar } from "./container/SearchBar";
import { SearchResultList } from "./container/SearchResultList";
import { useState } from "react";

function App() {
  const [result,setResult]=useState([])
  return (
    <div className="App">
      <div className="search-bar-container">
        <div className="centered-content">
          <SearchBar setResult={setResult} />
          <SearchResultList result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;
