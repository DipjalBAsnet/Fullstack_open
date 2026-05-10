const Button = ({onGoodClick, onNeutralClick, onBadClick}) => {
    return (<div>
       <button onClick={onGoodClick}>Good</button> 
       <button onClick={onNeutralClick}>Neutral</button>
       <button onClick={onBadClick}>Bad</button>
    </div>)
}

export default Button