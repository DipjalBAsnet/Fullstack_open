import Part from "./Part";

const Content = ({ course, total }) => {
  return (
    <div>
      <p>
        {course.parts.map((part) => (
          <Part part={part} key={part.id} />
        ))}
        <b>{`total of ${total} exercises`}</b>
      </p>
    </div>
  );
};

export default Content;
