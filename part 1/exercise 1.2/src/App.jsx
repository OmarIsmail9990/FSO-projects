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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App