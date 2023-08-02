import React , {useState} from 'react'


export default function Statecounter(){
    const[counter, setcounter] = useState(0)

const increment = () => {
    setcounter(counter+1)
}
const decrement = () => {
    setcounter(counter-1)
}
return (
    <>
    <div>{counter}</div>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </>
)
};