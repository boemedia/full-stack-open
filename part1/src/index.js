import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {

  console.log()

  const name ='Peter'
  const age = 10

  return (
    <>
   <h1>Greetings</h1>
  <Hello name="Monique" age={38+10} />
  <Hello name={name} age={age} />
  <Footer />
  </>
  )
  }

  const Footer = () => {
    
    return (
    <div>
      Greeting app created by <a href="https://www.boemedia.eu">Monique Dubbelman</a>
    </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))