import React from 'react'

const Filter = ({filterKeyName, handleFilterChange}) => {
  return (
    <div>
        filter shown with{" "}
        <input value={filterKeyName} onChange={handleFilterChange} />
    </div>
  )
}

export default Filter
