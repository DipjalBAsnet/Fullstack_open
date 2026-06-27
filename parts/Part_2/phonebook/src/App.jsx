import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonsForm from "./components/PersonsForm";
import Persons from "./components/Persons";
import noteService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewperson] = useState("");
  const [search, setSearch] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    noteService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

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

    noteService.create(personObject).then((newPerson) => {
      setPersons(persons.concat(newPerson));
      setNewperson("");
      setNewNumber("");

      setNotification(`${newPerson.name} added to phonebook`);
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    });
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

  const removePerson = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      noteService.deletePerson(id).then(() => {
        setPersons(persons.filter((p) => p.id != id));

        setNotification(`${name} deleted from phonebook`);
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });
    }
  };
  return (
    <div>
      <h1>phonebook</h1>
      <Notification message={notification} />
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
      <Persons filteredPerson={filteredPerson} removePerson={removePerson} />
    </div>
  );
};

export default App;
