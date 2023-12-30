import React, { useState } from 'react'
import './index.scss'
import ModalWindow from './ModalWindow'

function App () {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => {setOpen(true)}}>✨
        Открыть окно
      </button>
      <ModalWindow open={open} setOpen={setOpen}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
             alt=""/>
      </ModalWindow>
    </div>
  )
}

export default App
