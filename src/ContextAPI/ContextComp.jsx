import React, { createContext, useContext } from 'react'
let Theme=createContext(null);
//title is context,first we will provide value to it and we will use it in form.we will wrap form inside it, so, later we can use it
let title=createContext(null);
//parent component
function ContextComp() {
  return (
   // <title.Provider value="WELCOME"></title.Provider>
    <div>
        <Theme.Provider value={"white"}>
            <Form/>  
            </Theme.Provider>
    </div>
    
  )
}
export default ContextComp

function Form(){
    //let us use useContext
    //let myTitle=useContext(title);
    let myTheme = useContext(Theme);
    return(
        <title.Provider value="WELCOME">
        
        <Panel>
            <h1>{myTheme}</h1>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
        </Panel>
        </title.Provider>

        //<button>click1</button>
        //<button>click2</button>
    )
}

function Panel({children}){
    let myTitle=useContext(title);
    let customTheme = useContext(Theme);
    let customClass ='button-'+customTheme;
    return(
        //instead of adding all buttons again , we can directly access from children
        <div className={customClass}>
            <h1>{myTitle}</h1>
            {children}
        </div>
    )
}

function Button({children}){
    let customTheme = useContext(Theme);
    let customClass ='button-'+customTheme;
    return(
        <div>
            <button className={customClass}> {children}</button>
        </div>
    )
}
