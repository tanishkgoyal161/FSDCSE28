import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './Icard.jsx'
import ICardGallery from './ICardGallery.jsx'
import StateHandling from "./StateHandling";

function App() {
  return (
    <div>
      <StateHandling />
    </div>
  );
}

export default App;


// function App() {
 

//   return (
//     <div>
//       <ICardGallery/>
   

//      </div>
     
//   )
// }

// export default App