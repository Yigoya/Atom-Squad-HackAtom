import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Landing } from './Pages/Landing'

function App() {
  const [count, setCount] = useState(0)
  const position = [51.505, -0.09]
  return (
    <>
      <Landing/>
    </>
  )
}

export default App
