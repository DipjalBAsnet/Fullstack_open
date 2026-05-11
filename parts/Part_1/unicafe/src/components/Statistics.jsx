const Statistics = ({good, neutral, bad, total, average, positive}) => {

    if(total === 0) {
        return <div>No Feedback Given</div>
    } 

    return (
        <div>
            <h1>Statistics</h1>
     <p>Good: {good}</p>
     <p>Neutral: {neutral}</p>
     <p>Bad: {bad}</p>
     <p>Total: {total}</p>
     <p>Average: {average}</p>
     <p>Positive: {positive}%</p>
        </div>
    )
}

export default Statistics