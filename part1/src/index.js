import React from 'react';
import ReactDOM from 'react-dom';


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Tomasz"
  const age = 49
  console.log('Hello from component')
  return (
  <div>
    <h1>Greetings</h1>
    <Hello name="Jakub" age="26"/>
    <Hello name="Yelena" age= {26+1}/>
    <Hello name={name} age= {age}/>
  </div>
  )
  }

ReactDOM.render(<App />, document.getElementById('root'))
