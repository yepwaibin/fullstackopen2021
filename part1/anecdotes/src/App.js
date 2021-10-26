import React, { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [points, setPoints] = useState(Array(7).fill(0));
  const [selected, setSelected] = useState(0);

  const voteClick = () => {
    const tempPoints = [...points];
    tempPoints[selected] = tempPoints[selected] + 1;
    setPoints(tempPoints);
  };

  const nextAnecdote = () => {
    const rand = Math.floor(Math.random() * 7);
    setSelected(rand);
  };

  const mostVotes = () => points.indexOf(Math.max(...points))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <button onClick={voteClick}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotes()]}</p>
    </div>
  );
}

export default App;
