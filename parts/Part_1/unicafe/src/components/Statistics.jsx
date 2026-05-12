import StatisticLine from "./StatisticLine"

const Statistics = ({good, neutral, bad, total, average, positive}) => {

    if(total === 0) {
        return <div>No Feedback Given</div>
    } 

    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="total" value={total}/>
      <StatisticLine text="positive" value={positive}/>
                </tbody>
            </table>
        </div>
    )
}

export default Statistics