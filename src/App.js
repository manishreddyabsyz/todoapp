import React from 'react'
import Form from './Components/Form'
import "./App.css"
const App = () => {
  return (
    <div className='container' style={{backgroundColor:"#242323"}}>
      <div className='content-container'>

      
      <header>
        <h1>My Task List</h1>
      </header>
      <Form />
      </div>
    </div>
  )
}

export default App