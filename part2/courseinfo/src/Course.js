import Header from "./components/Header";
import Content from "./components/Content";

const Course = ({ course }) => {
  return (
    <div>
      {course.map((item) => (
        <div key={item.id}>
          <Header name={item.name} />
          <Content parts={item.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
