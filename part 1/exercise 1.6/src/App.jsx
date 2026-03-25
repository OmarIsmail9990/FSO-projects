import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return ( 
      <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = (props) => {

  const {text, value} = props

     return (
        <div>
          <p>{text} {value}</p>
        </div>
      )
  
}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
     <div>
        <h1>statistics.</h1>
        <p>No feedback given.</p>
     </div>
    )
  }

  else {

  return(
    <div>
      <h1>statistics.</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good + neutral + bad} />
      <StatisticLine text="average" value={good + neutral + bad === 0 ? 0 : (good - bad) / (good + neutral + bad)} />
      <StatisticLine text="positive" value={good + neutral + bad === 0 ? 0 : (good / (good + neutral + bad) * 100)} />
    </div>
  )
  }
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    
    <div>

      <h1>give feedback.</h1 >

      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />

      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
    
  )
}

export default App