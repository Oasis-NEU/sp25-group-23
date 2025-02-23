import { useState } from 'react'
import './App.css'
import { supabase } from './supabase'
import 'leaflet/dist/leaflet.css'
import './TLineMap.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
        <h1>MBTA T-Line Map</h1>
        <TLineMap />
      </div>
    );
}

export default App;
