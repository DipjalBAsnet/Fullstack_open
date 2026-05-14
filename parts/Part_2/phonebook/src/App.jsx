import { useState } from "react";
import Filter from "./components/Filter";
import PersonsForm from "./components/PersonsForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newPerson, setNewperson] = useState("");
  const [search, setSearch] = useState("");
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

  const filteredPerson = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>phonebook</h1>
      <Filter search={search} handleSearchChange={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonsForm
        addPerson={addPerson}
        newPerson={newPerson}
        newNumber={newNumber}
        handleNoteChange={handleNoteChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filteredPerson={filteredPerson} />
    </div>
  );
};

export default App;
