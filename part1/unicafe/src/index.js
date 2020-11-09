import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Statistic = ({text, value}) => {
  return(
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

const Statistics = ({all, good, neutral, bad, average, positive}) => {
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <div>
      <table>
        <tbody>
          <Statistic text="good" value ={good} />
          <Statistic text="neutral" value ={neutral} />
          <Statistic text="bad" value ={bad} />
          <Statistic text="all" value ={all} />
          <Statistic text="average" value ={average.toFixed(2)} />
          <Statistic text="positive" value ={positive.toFixed(2) + ' %'}  />
        </tbody>
      </table>
    </div>
  )
}

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


  const allVotes = good + neutral + bad
  const average = (good - bad)/ allVotes
  const positive = (good / allVotes) * 100

  

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleSetGood} text='good' />
      <Button onClick={handleSetNeutral} text='neutral' />
      <Button onClick={handleSetBad} text='bad' />
      <Statistics all = {allVotes } good = {good} neutral = {neutral} bad = {bad}  average = {average} positive = {positive}></Statistics>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)