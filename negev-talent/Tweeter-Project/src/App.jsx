import './App.css'
import MainScreen from './pages/mainScreen'
import { TweetsContextProvider } from './contexts/tweetsContext'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <TweetsContextProvider>
          <MainScreen />
        </TweetsContextProvider>
      </MantineProvider>
    </>
  )
}

export default App
