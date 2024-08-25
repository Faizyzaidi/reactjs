import  React ,{ useContext } from 'react'
import { counterContext } from './Context'
function Componet1() {
  const counter = useContext(counterContext)
  return (
    <div>
      {counter}
    </div>
  )
}

export default Componet1
