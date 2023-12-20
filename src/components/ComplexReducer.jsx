import React from 'react'
import { useReducer } from 'react';

let initialValue=0;
function reducer(state,action){
    switch(action.type){
        case "increment":
            return state+action.payload;

        case "decrement":
            return state-action.payload;

        case "reset":
            return initialValue;

            default:
                return state;
    }

}
    function ComplexReducer() {
    const[count,dispatch] = useReducer(reducer,initialValue)


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch({type:"increment",payload:5})}>Increment</button>
        <button onClick={()=>dispatch({type:"decrement",payload:3})}>Decrement</button>
        <button onClick={()=>dispatch("Reset")}>Reset</button>
    </div>
  )
}

export default ComplexReducer