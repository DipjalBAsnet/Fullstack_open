import { useState } from 'react'
import Display from './components/Display'
import Button from './components/Button'

const App = () => {

  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const zero = () => setCounter(0)

   return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text ='+'/>
      <Button onClick={decreaseByOne} text="-" />
      <Button onClick={zero}text='zero' />
    </div>
   )
}

export default App