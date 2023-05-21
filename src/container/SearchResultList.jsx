import React from "react";
import "../container/SearchResultList.css";
import { SearchResult } from "./SearchResult";
export const SearchResultList = ({ result }) => {
  return (
    <div className="result-list">
      {result.map((results, id) => {
        return (
          <div
            onClick={(e) => {
              alert(
                `You clicked ${results.name}, UserName: ${results.username}, Email: ${results.email},  Phone: ${results.phone}`
              );
            }}
            key={id}
          >
            {<SearchResult results={results} />}
          </div>
        );
      })}
    </div>
  );
};
