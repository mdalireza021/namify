import React from "react";

const SearchInput: React.FC<{ handleInput: (value: string) => void }> = ({
  handleInput,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInput(event.target.value);
  };

  return (
    <>
      <input
        className="search-input"
        onChange={handleChange}
        type="text"
        placeholder="Enter Keywords"
      />
    </>
  );
};

export default SearchInput;
