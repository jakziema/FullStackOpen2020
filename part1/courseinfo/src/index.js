import React,{useState} from 'react';
import ReactDOM from 'react-dom';




const Header = (props) => {
  console.log(props)
  return (
    
    <div>
    <h1>{props.course}</h1>
    </div>
  )
}

const Hello = ({name, age}) => {
  const bornYear = () =>  new Date().getFullYear() - age
    
  

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Course = (props) => {
  return(
    <div>
    <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises}></Part>
    <Part part = {props.parts[1].name} exercises={props.parts[1].exercises}></Part>
    <Part part = {props.parts[2].name} exercises={props.parts[2].exercises}></Part>
    </div>
  )
}

const Total = (props) => {
  return (
   <div>
     <p>Number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
   </div> 
  )
}

const Display = ({counter}) => {
  return (
  <div>{counter}</div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick = {handleClick}>
      {text}
    </button>
  )
}

const App = () => {

  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

 

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course = {course}></Header>
      <Course parts = {parts} ></Course>
      <Total parts = {parts}></Total>
      <Hello name = "Jakub" age = "26"></Hello>
      <Display counter = {counter}></Display>
      <Button handleClick = {increaseByOne} text = 'plus' ></Button>
      <Button handleClick = {setToZero} text = 'zero' ></Button>
    </div>
    
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)


