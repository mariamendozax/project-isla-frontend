import { useState } from 'react'
import Hero from './Hero.jsx'
import Menu from './Menu.jsx'

function App() {
  const [verMenu, setVerMenu] = useState(false);

  return (
    <>
      {!verMenu ? (
        <Hero onEnter={() => setVerMenu(true)} />
      ) : (
        <Menu />
      )}
    </>
  );
}

export default App;