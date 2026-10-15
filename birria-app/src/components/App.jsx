import { useState } from 'react'
import Hero from './Hero.jsx'

function App() {
  const [verMenu, setVerMenu] = useState(false);

  return (
    <>
      {!verMenu ? (
        <Hero onEnter={() => setVerMenu(true)} />
      ) : (
        <p>Aquí va el menú 🌮</p>
      )}
    </>
  );
}

export default App;