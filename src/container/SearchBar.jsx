import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../container/SearchBar.css";

export const SearchBar = ({setResult}) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResult(results)
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="search-bar">
      <FaSearch id="search-icon" />
      <input
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        name="text"
        className="input"
        placeholder="Search name.."
      />
    </div>
  );
};
