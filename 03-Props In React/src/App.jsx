import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

// props make component reusable

function App() {
  let Kill = ["killer YT, ","Youtuber, ","Channel Name :- FF Pro Killers"]
  return (
    <>
    <Card/>
    <Card username="Priyanshu" Details={Kill}/>
    </>
  )
}

export default App
