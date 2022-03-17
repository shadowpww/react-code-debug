import React, { useEffect, useState } from 'react'
import UseState from './UseStateExp'
import UseEffect from './UseEffectExp'
import './index.css'
const Hooks = () => {
    const [num,setNum] = useState(0);
    useEffect(()=>{
        // debugger;
        console.log('num1',num);
        setNum(2);
        return ()=>{
            console.log('destroy');
        }
    },[num]);
    useEffect(()=>{
        console.log('num2',num);
        setNum(4);
        return ()=>{
            console.log('destroy');
        }
    },[num]);
    return <div className="hooks">
        {/*<UseState/>*/}
        {/* <UseEffect/> */}
    </div>
}
export default Hooks
