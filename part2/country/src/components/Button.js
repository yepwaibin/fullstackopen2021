import React from "react";

const Button = ({ country, showCountry }) => {
  const handleClick = () => {
    showCountry(country);
  };
  return (
    <>
      <button onClick={handleClick}>show</button>
    </>
  );
};

export default Button;
