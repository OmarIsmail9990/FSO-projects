const Header = (props) => {
  console.log(props + "Header props")
  return (
    <div>
     <center>
       <h1>
         This is the {props.course} course.
       </h1>
     </center>
    </div>
  )
}

const Part = (props) => {
  console.log(props + "Part props")
  return (
    <div>
     <p>{props.part} which consists of {props.exercises} exercises.</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props+"Content props")
  return (
    <div>
      <h2>The course consists of the following parts and exerscises:</h2>
     <ol>
      <li><Part part={props.part1} exercises={props.exercises1}/></li>
      <li><Part part={props.part2} exercises={props.exercises2}/></li>
      <li><Part part={props.part3} exercises={props.exercises3}/></li>
     </ol>
    </div>
  )
}

const Total = (props) => {
  console.log(props + "Total props")
  return (
    <div>
     <center>
       <h3>
         The total number of exercises is {props.exercises1 + props.exercises2 + props.exercises3 }.
       </h3>
     </center>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />

      <Content
       part1={part1.name}
       part2={part2.name}
       part3={part3.name}

       exercises1={part1.exercises}
       exercises2={part2.exercises} 
       exercises3={part3.exercises} />

      <Total
       exercises1={part1.exercises} 
       exercises2={part2.exercises} 
       exercises3={part3.exercises} />

    </div>
  )
}

export default App