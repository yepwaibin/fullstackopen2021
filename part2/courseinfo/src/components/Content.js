import React from "react";
import Part from "./part";
const Content = ({ parts }) => {
  const total = parts.reduce((pre, cur) => pre + cur.exercises, 0);
  return (
    <div>
      {parts.map((item) => (
        <Part key={item.id} part={item} />
      ))}
      <h3>total of {total} exercises</h3>
    </div>
  );
};

export default Content;
