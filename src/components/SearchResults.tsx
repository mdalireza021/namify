import React from "react";
import "./styles.css";
import NameChip from "./NameChip";

const SearchResults: React.FC<{ result: string[] }> = ({ result }) => {
  const showResult = result.map((value) => {
    return <NameChip key={value} name={value} />;
  });

  return <div className="result-container">{showResult}</div>;
};

export default SearchResults;
