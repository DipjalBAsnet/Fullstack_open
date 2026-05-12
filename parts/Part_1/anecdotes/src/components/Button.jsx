const Button = ({ onButtonClick, onVoteClick }) => {
  return (
    <div>
      <button onClick={onVoteClick}>vote</button>
      <button onClick={onButtonClick}>next anecdotes</button>
    </div>
  );
};

export default Button;
