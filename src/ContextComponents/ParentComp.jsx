import React from 'react'
import CompA from './CompA'
import Context from './Context'

function ParentComp() {
  return (
    <div>
        <Context>
        <CompA/>
        </Context>

    </div>
  )
}

export default ParentComp