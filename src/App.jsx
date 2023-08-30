import React, { useState } from "react";
import List from "./List";
const App=()=>{
    let val="";
    let [LatestValue,setLatestValue]=useState('');
    let [olderValues,setOlderValues]=useState([])
    const ChangedEvent=(event)=>{
        setLatestValue(event.target.value);
     } 
    const clickedButton=()=>{
       
        setOlderValues((olderValuesOfArray)=>{
            return [
            ...olderValuesOfArray,
            LatestValue
            ]
        })

        setLatestValue("");
     }
    const deleteItem=(id)=>{
      setOlderValues((olderValuesOfArray)=>{
      return  olderValuesOfArray.filter((curvalue,curIndex)=>{
      return curIndex!==id
      })
       })
     }
    return(
        <>
        <div className="container">
        <div className="box">
            <h1>To do List</h1>
            <input placeholder="Add item to list"
                onChange={ChangedEvent}
                value={LatestValue}
            />
            <button onClick={clickedButton}>+</button>

            <ol className="List"> 
            {
                olderValues.map((curValue,index)=>{
              return  <List value={curValue}
                key={index}
                id={index}
                onSelect={deleteItem}
              />
                })
            }
            </ol>
        </div>
        </div>
        </>
    )
}
export default App;