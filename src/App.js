import './App.css';
import Button from './components/Button.js';
import Count  from './components/Count';
import freecodeCampLogo from './images/freecodecamp-logo.png';
import { useState } from 'react';


function App() {

  const [ numClicks, setNumClicks ] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);

  }

  const restartCount = () =>{
    setNumClicks(0);
  }


  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
      <img 
          className='freecodecamp-logo'
          src={freecodeCampLogo}
          alt='Logo of freeCodeCamp' />
      </div>
      <div className='main-container'>
        <Count numclicks={numClicks} />
        <Button
        text= 'Click'
        isClickButton= {true}
        handleClick= {handleClick} />     
        <Button
        text= 'Restart'
        isClickButton= {false}
        handleClick={restartCount} />     
      </div>
    </div>
  );
}

export default App;
