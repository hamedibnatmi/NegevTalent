import { useState } from 'react'
import './App.css'
import MainScreen from './pages/mainScreen'
import { TextAreaProvider } from './contexts/textAreaContext'

function App() {
  return (
    <>
      <TextAreaProvider>
        <MainScreen />
      </TextAreaProvider>
    </>
  )
}

export default App
