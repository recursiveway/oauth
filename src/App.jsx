import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoogleOAuthButton from './GoogleOAuthButton'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <GoogleOAuthButton />
   </>
  )
}

export default App
