import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ onClick, text }) => (
<button onClick={onClick}>{text}</button>

)

function getMaxOfArray(numArray) {
  return Math.max(...numArray)
}

function getHighestVote(array) {
  return array.indexOf(getMaxOfArray(array))
}


const App = (props) => {

  const voteList = Array(props.anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([...voteList])

  const voteForAnecdote = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }

  const handleNextAnecdote = () => {
    console.log(getMaxOfArray(vote))
    console.log(getHighestVote(vote))
  const random = Math.floor(Math.random() * (anecdotes.length - 1))
    return (
      setSelected(random)
    )

    
  }

  
    
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      
      <Button onClick = {voteForAnecdote} text = 'Vote'></Button>
      <Button onClick = {handleNextAnecdote} text = 'Next anecdote'></Button>
      
      <p>has {vote[selected]} votes</p>

      <h1>Anecdote with most votes</h1>
  <p>{props.anecdotes[getHighestVote(vote)]}</p>

    
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)