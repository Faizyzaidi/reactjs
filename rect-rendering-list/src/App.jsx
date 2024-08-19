import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


/*function Todo({ todo }) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.descp}</p>
    </div>
  );
}*/

function App() {
  const [showbtn,setbtn] = useState(true)
 const [todos , settodo] = useState([
    {
      title: "hi",
      descp: "this is descrp"
    },
    {
      title: "hi 2",
      descp: "this is descrp2"
    }
  ]);
  return (
    <>
  {todos.map(todo =>{
    //return <Todo key ={todo.title} todo ={todo} />
  return (
   <div key={todo.title}>
      <h3>{todo.title}</h3>
      <p>{todo.descp}</p>
    </div>

   )
  })}
      <div className= "card">
        {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}  
        {/*{showbtn && <button>showbtn is true</button>}*/}
        <button onClick = {() =>{setbtn(!showbtn)}}>toggle showbtn</button>
      </div>
    </>
  )
}

export default App
