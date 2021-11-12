import React, { useState, useEffect } from "react";
import personServer from "./services/phoneNumber";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterKeyName, setfilterKeyName] = useState("");
  const [isUpdata, setIsUpdata] = useState(false);
  useEffect(() => {
    personServer.getAll().then((res) => setPersons(res.data));
  }, [isUpdata]);

  const handleFilterChange = (event) => {
    setfilterKeyName(event.target.value);
  };

  const handleUpdata = () => {
    setIsUpdata(!isUpdata);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterKeyName={filterKeyName}
        handleFilterChange={handleFilterChange}
      />

      <h2>add a new</h2>
      <PersonForm handleUpdata={handleUpdata} />
      <h2>Numbers</h2>
      <Persons persons={persons} filterKeyName={filterKeyName} handleUpdata={handleUpdata} />
    </div>
  );
};

export default App;
