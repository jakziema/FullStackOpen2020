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

const Course = ({course}) => {
    return (
        <div>
            <Header key = {course.id} course = {course}></Header>

            {course.parts.map((part) => {
                return (
                    <Part key = {part.id} part = {part}></Part>
                )
                })}
        </div>
    )
}

export default Course