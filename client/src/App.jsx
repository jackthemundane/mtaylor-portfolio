import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    fetch('https://api.mtaylor.design/')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage("Error connecting to backend"))
  }, [])

  return (
    <div className="App">
      <h1>MERN Stack Test</h1>
      <div className="card">
        <p>Backend says: <strong>{message}</strong></p>
      </div>
    </div>
  )
}

export default App
