const Statistics = ({good, neutral, bad, total, average, positive}) => {
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