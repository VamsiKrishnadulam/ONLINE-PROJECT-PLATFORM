import React,{useState} from 'react'

const Uppercase=()=>{
    return <h1>Uppercase
    </h1>
}

const Lowercase=()=>
{
    return <h1>Lowercase</h1>
}

const Condition=(props)=>{
    if(props.case==="Upper"){
       return <Uppercase/>
    }
    else if(props.case==="Lower"){
        return <Lowercase/>
    }
}


export default Condition
