import './App.css'
import MainScreen from './pages/mainScreen'
import { TweetsContextProvider } from './contexts/tweetsContext'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import Profile from './pages/profile'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navBar'

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <TweetsContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<MainScreen />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </TweetsContextProvider>
      </MantineProvider>
    </>
  )
}

export default App
