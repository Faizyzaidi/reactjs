import { useState } from 'react'

import './App.css'

function App() {
const [color ,setColor ] = useState('black');
  return (
    <>
    <div className='container' style={ {background: color}}>
       <div className='color-box'> 
        <button id='red' className='btn'onClick={() => setColor('red')} >RED</button>
        <button id='green' className='btn'onClick={() => setColor('green')}>GREEN</button>
        <button id='blue' className='btn'onClick={() => setColor('blue')}>BLUE</button>
        <button id='violet' className='btn'onClick={() => setColor('violet')}>VIOLET</button>
        <button id='yellow' className='btn'onClick={() => setColor('yellow')}>YELLOW</button>
        <button id='pink' className='btn'onClick={() => setColor('pink')}>PINK</button>
        <button  id='white'  className='btn'onClick={() => setColor('white')}>WHITE</button>


       </div>
    </div>
  
    </>
  )
}

export default App
