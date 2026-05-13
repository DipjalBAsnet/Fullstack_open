import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewperson] = useState("");
  // const [numbers, setNumbers] = useState("31231");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const nameExist = persons.some((person) => person.name === newPerson);

    if (nameExist) {
      alert(`${newPerson} is already added to phonebook`);
      return;
    }

    const personObject = {
      name: newPerson,
      number: newNumber,
    };

    setPersons(persons.concat(personObject));
    setNewperson("");
    setNewNumber("");
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewperson(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson} onChange={handleNoteChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
