import React from "react";
const NameChip: React.FC<{ name: string }> = ({ name }) => {
  const nameCheapURL = "https://brainstation-23.com/?1";
  return (
    <div className="chip-container">
      <a
        className="chip-link"
        href={nameCheapURL}
        target="_blank"
        rel="noreferrer">
      </a>
      <p className="chip-text"> {name}</p>
    </div>
  )
}

export default NameChip;
