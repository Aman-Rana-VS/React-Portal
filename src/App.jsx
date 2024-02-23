import { useState } from 'react'
import { createPortal } from 'react-dom';
import Portal from './Portal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const node = document.getElementById("modal");

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {createPortal(<Portal isOpen={isOpen} setIsOpen={setIsOpen}/>, node)}
    </> 
  )
}

export default App
