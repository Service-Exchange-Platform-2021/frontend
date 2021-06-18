import React, { useContext } from "react";
import SearchResult from "./SearchResult";
import SearchContext from "../context/SearchContext";


const Search = () => {


  const { lookSelection, country, region, searchResults } =
    useContext(SearchContext);

  const searchResultsDisplay = searchResults.map((result) => (
    <SearchResult result={result} />
  ));

  const list = lookSelection.map((selection) => selection.value);

  return (
    <>
      <br />
      <br />
      <br />
      <div className="searchCriteriaDisplay">
        <p>You are looking for: {list.toString()}</p>
        <p>
          {" "}
          in {country} / {region}.
        </p>
      </div>

      {searchResults.length > 0 && <p className="matches">Here comes the matches we found for you:</p>}
      {searchResults.length > 0 ? (
        searchResultsDisplay
      ) : (
        <h1 className="noMatches">
          No matches found <br />
          or you you forgot to login
        </h1>
      )}
    </>

  );
};

export default Search;
