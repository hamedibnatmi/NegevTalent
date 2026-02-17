import './App.css'
import MainScreen from './pages/mainScreen'
import { TweetsContextProvider } from './contexts/tweetsContext'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import Profile from './pages/profile'

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <TweetsContextProvider>
          <Profile />
          {/* <MainScreen /> */}
        </TweetsContextProvider>
      </MantineProvider>
    </>
  )
}

export default App
