import React, { useState } from 'react'
import Make from './components/Make'

function App ({ db }) {
  const [tab, setTab] = useState(1)
  return (
    <div>
      <div>
        <button onClick={() => setTab(0)}>Polls</button>
        <button onClick={() => setTab(1)}>Create</button>
        {tab === 0 && <p>Show polls</p>}
        {tab === 1 && <Make db={db}/>}
      </div>
    </div>
  )
}

export default App
