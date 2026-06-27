const Persons = ({ filteredPerson, removePerson }) => {
  return (
    <div>
      {filteredPerson.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
          <button onClick={() => removePerson(person.id, person.name)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
