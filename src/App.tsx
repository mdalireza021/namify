import React, { useState } from "react";
import SearchResults from "./components/SearchResults";
import SearchInput from "./components/SearchInput";

const name = require("@rstacruz/startup-name-generator");

const App: React.FC = () => {
  const [result, setResult] = useState<string[]>([]);

  const handleChange = (inputText: string) => {
    setResult(inputText.length > 0 ? name(inputText) : []);
  };

  return (
    <div className="App">
      <h2> Namify </h2>
      <h4>
        Get unlimited number of catchy names for your next venture or start-up!
      </h4>
      <SearchInput handleInput={handleChange} />
      <SearchResults result={result} />
    </div>
  );
};
export default App;
