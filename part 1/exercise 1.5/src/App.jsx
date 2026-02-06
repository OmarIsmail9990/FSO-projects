const Header = (props) => {
  console.log(props + "Header props")
  return (
    <div>
     <center>
       <h1>
         This is the {props.course.name} course.
       </h1>
     </center>
    </div>
  )
}

const Part = (props) => {
  console.log(props + "Part props")
  return (
    <div>
     <p>({props.part}) which consists of {props.exercises} exercises.</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props+"Content props")
  return (
    <div>
      <h2>The course consists of the following parts and exerscises:</h2>
     <ol>
      <li><Part part={props.parts[0].name} exercises={props.parts[0].exercises}/></li>
      <li><Part part={props.parts[1].name} exercises={props.parts[1].exercises}/></li>
      <li><Part part={props.parts[2].name} exercises={props.parts[2].exercises}/></li>
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
         the total number of exercises is {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises } .
       </h3>
     </center>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App