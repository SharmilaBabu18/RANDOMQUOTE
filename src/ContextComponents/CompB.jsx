import React, { useContext } from 'react'
import Context,{name} from './Context'


function CompB() {
    let useName =useContext(name)
  
  return (
    <div>
        <h1>NAME:{useName}</h1>
    </div>
  )
}

export default CompB