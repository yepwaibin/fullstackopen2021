import personServer from "./services/phoneNumber";
import React, { useState } from "react";

const PersonForm = ({ handleUpdata }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    personServer.updata({ name: newName, number: newNumber }).then((res) => {
      if (res.status === 201) {
        handleUpdata();
      }
    });
    setNewName("");
    setNewNumber("");
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleNameSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
