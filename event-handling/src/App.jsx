import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form,setform] = useState({email : "" , phone : ""})
  const handletext = (e) =>{
   setform({...form ,[e.target.name] : e.target.value})
  }
const handlebtn = () =>{
  alert("button was click")
}
const hoverme = ()=>{
  alert("over me")
}
const submit = (e)=>{
  e.preventDefault();
  setform({email : "" , phone : ""})
}
  return (
    <>
       <div>
        <button onClick={handlebtn}> click me</button>
       </div>
       <button onMouseOver={hoverme}>hover me</button>
      <input type="text" name='email' value={form.email} onChange={handletext} />
      <input type="text" name='phone' value={form.phone} onChange={handletext} />
      <button onClick={submit}> submit</button>

    </>
  )
}

export default App
