import { useState } from 'react'
import { Provider } from './components/ui/provider'
import NavBar from './components/header/Header';
import MainSecction from './components/Main/MainSecction';
import './App.css'

// DEBBUG
import { Button, HStack } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider>

      <NavBar />

      <MainSecction />
      
      

      <h1>ADA Dev School</h1>

    {/* DEBUUG */}
    {/* <HStack>
      <Button>Click Me</Button>
      <Button>Click Me</Button>
    </HStack> */}
      
    </Provider>
  )
}

export default App
