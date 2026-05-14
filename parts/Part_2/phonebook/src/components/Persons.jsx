const Persons = ({ filteredPerson }) => {
  return (
    <div>
      {filteredPerson.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default Persons;
