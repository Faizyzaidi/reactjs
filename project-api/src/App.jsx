import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [card, setCards] = useState([])
  let fetcdata = async () =>{
      let a = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await a.json()
      setCards(data);
      console.log(data)
  }
 useEffect(() =>{
  fetcdata();
 } )
  return (
    <>
    <div className ='container'> 
      {card.map((card) => {
       return   <div className='card' key={card.id}>
        <h1>{card.title}</h1>
        <p>{card.body}</p>
        </div>
        
      })}
    </div>
    </>
  )
}

export default App
