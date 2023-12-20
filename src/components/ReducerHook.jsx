import React, { useReducer } from 'react'

let initialValue=0;
function reducer(state,action){
    switch(action){
        case "increment":
            return state+1;

        case "decrement":
            return state-1;

        case "reset":
            return initialValue;

            default:
                return state;
    }

}
    function ReducerHook() {
    const[count,dispatch] = useReducer(reducer,initialValue)


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch("increment")}>Increment</button>
        <button onClick={()=>dispatch("decrement")}>Decrement</button>
        <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default ReducerHook