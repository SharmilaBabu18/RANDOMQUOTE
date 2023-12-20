import React from 'react'

export let name=React.createContext(null);
function Context({children}) {
  return (
    <name.Provider value="Sharmila">
        {children}
    </name.Provider>
    
  )
}

export default Context