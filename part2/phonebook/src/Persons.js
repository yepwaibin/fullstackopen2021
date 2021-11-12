import React from "react";
import personServer from "./services/phoneNumber";

const Persons = ({ persons, filterKeyName, handleUpdata }) => {
  const handleDelete = (id) => {
    const idDelete = window.confirm("Are you sure to delete the infomation?");
    if (idDelete) {
      personServer.deletePerson(id).then((res) => console.log(res));
      handleUpdata()
    }
  };
  if (persons.length) {
    return (
      <div>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(filterKeyName.toLowerCase())
          )
          .map((person) => (
            <div key={person.number}>
              {person.name} {person.number}{" "}
              <button key={person.id} onClick={() => handleDelete(person.id)}>
                delete
              </button>
            </div>
          ))}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Persons;
