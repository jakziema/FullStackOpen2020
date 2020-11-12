import React from 'react'

const Header = ({course}) => {
    return (
    <h1>{course.name}</h1>
    )
}

const Part = ({part}) => {
    return (
        <p key = {part.id}>
            {part.name} : {part.exercises}
        </p>
    )
}

const Total = ({course}) => {
    const arrayOfExercises = course.parts.map((part) => part.exercises)
    const sumOfExercises = arrayOfExercises.reduce((total, exercises) => total + exercises)

    return (
    <p><b>Total of {sumOfExercises} exercises</b></p>
    )
}


const Course = ({course}) => {
    return (
        <div>
            <Header key = {course.id} course = {course}></Header>

            {course.parts.map((part) => {
                return (
                    <Part key = {part.id} part = {part}></Part>
            
                )
                })}
            <Total course = {course}></Total>
        </div>
    )
}

export default Course