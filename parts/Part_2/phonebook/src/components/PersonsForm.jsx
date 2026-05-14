const PersonsForm = ({
  addPerson,
  newPerson,
  newNumber,
  handleNoteChange,
  handleNumberChange,
}) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson} onChange={handleNoteChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonsForm;
