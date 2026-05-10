import { useState } from "react"
import Button from "./components/Button"


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onGoodClick = () => {
    setGood(good + 1)
  }

  const onNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const onBadClick = () => {
    setBad(bad + 1)
  }

  const total = good + bad + neutral
  const average = total > 0 ?  (good - bad)/total : 0
  const positive = total > 0 ? (good/total) * 100 : 0



 return (
  <div>
   <h1>Give Feedback</h1>
    <Button onGoodClick={onGoodClick} onNeutralClick={onNeutralClick} onBadClick={onBadClick}/>
    <br />
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

export default App