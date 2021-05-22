import React from 'react';
import Minparent from './components/Minparent'


const a=[1,2,3];
const Child=()=>{
    return(
        <Minparent val={a}></Minparent>
    )
}

export default Child;