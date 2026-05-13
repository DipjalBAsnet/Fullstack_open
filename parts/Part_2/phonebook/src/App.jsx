import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Bikash" }]);
  const [newPerson, setNewperson] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newPerson,
    };

    setPersons(persons.concat(personObject));
    setNewperson("");
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewperson(event.target.value);
  };

  return (
    <div>
      <h2>phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson} onChange={handleNoteChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
};

export default App;
