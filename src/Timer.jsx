import React, { useEffect } from 'react'
import { useState } from 'react'
import './Timer.css'

function Timer() {
    const[time ,setTime]= useState(0);
    const[runing, setRuninng]=useState(false);

    useEffect(() =>{
        let interval;
        if (runing){
            interval =setInterval(()=>{
                setTime((prevTime)=> prevTime+10);
            },10);
        }else if(!runing){
            clearInterval(interval);
        }
        return () => clearInterval(interval);       
    }, [runing])
  return (
    <div className='timer'>
        <h1>Stop Watch</h1>
        <div className='diplay'>
            <span>{("0"+ Math.floor((time/60000)%60)).slice(-2)}:</span>
            <span>{("0"+ Math.floor((time/1000)%60)).slice(-2)}:</span>
            <span>{("0"+ ((time/10)%100)).slice(-2)}</span>
        </div>
        <div > 
            {runing ? (
                <button onClick={()=>{setRuninng(false)}} id='stop'>Stop</button>
                ) :(
                <button onClick={()=>{setRuninng(true)}} id='start'>Start</button>
                )
            }
            <button onClick={()=>{setTime(0)}}id='reset'>Reset</button>
        </div>
    </div>
  )
}

export default Timer
