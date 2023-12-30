import './index.scss'
import { useState } from 'react'

function App () {
  const [num, setNum] = useState(68)

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{num}</h1>
        <button className="minus" onClick={() => {setNum(num - 1)}}>- Минус
        </button>
        <button className="plus" onClick={() => {setNum(num + 1)}}>Плюс +
        </button>
      </div>
    </div>
  )
}

export default App
