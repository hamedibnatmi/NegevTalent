import './App.css'
import MainScreen from './pages/mainScreen'
import { TextAreaProvider } from './contexts/textAreaContext'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <TextAreaProvider>
          <MainScreen />
        </TextAreaProvider>
      </MantineProvider>
    </>
  )
}

export default App
