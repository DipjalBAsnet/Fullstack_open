import { useState } from "react"
import History from "./components/History"

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
     console.log('left before', left)
     const updatedLeft = left + 1
    setLeft(updatedLeft)
     console.log('left after', left)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
  setAll(allClicks.concat('R'))
  const updatedRight = right + 1
  setRight(updatedRight)
  setTotal(left + updatedRight)
  }

  return (
   <div>
    {left}
    <button onClick={handleLeftClick} text="left">left</button>
    <button onClick={handleRightClick} text="right">right</button>
    {right}
    <p>{allClicks.join('')}</p>
    <p>total {total}</p>
    <History allClicks={allClicks}/>
   </div>
  )
}

export default App