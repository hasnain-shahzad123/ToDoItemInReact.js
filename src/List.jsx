import React from "react";
const List=(props)=>{
    return (
    <>
    <div className="toList">
    <button onClick={()=>{
        props.onSelect(props.id)
    }}><i className="bi bi-trash3-fill"></i></button>
    <li>
    {props.value}
    </li> 
    </div>
    </>
    )
}
export default List;