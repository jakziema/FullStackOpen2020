import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleSetGood = () => {
    setGood(good + 1)
  }
  const handleSetNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleSetBad = () => {
    setBad(bad + 1)
  }

  

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleSetGood} text='good' />
      <Button onClick={handleSetNeutral} text='neutral' />
      <Button onClick={handleSetBad} text='bad' />
      <h2>statistics</h2>
    <p>good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)