import React from "react";
import Button from "./Button";
const List = ({ countries, showCountry }) => {
  return (
    <div>
      {countries.length >= 10 ? (
        <div>Too many matches,specify another filter</div>
      ) : (
        countries.map((item) => (
          <div key={item.name.common}>
            {item.name.common}{" "}
            <span>
              <Button showCountry={showCountry} country={item.name.common} />
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default List;
