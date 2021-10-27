import React from 'react'

const Persons = ({persons, filterKeyName}) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filterKeyName.toLowerCase())
        )
        .map((person) => (
          <div key={person.number}>
            {person.name} {person.number}
          </div>
        ))}
    </div>
  )
}

export default Persons
