import React from 'react';
import useStyles from '../Grid.styles'

const offCell={
    on:false,
    color: "yellow",

}
// const initialCells = Array.from({length:40},()=>offCell)

export default function Grid({currentColor, cells, setCells}) {
    // const [cells, setCells]=useState(initialCells)

    const classes= useStyles();
    const updateCell=(i, defaultState)=>(e)=>{
        e.preventDefault()
        setCells(cells.map((cell,cellindex)=>{
            if(cellindex === i){
                if (defaultState)return defaultState
                return {on:true, color:currentColor}
            }
            return cell
        }))
    };

    return (
        <div className={classes.grid}>
            {/* {Array.from({length:40})} */}
            {cells.map((cell, i)=><div 
            style={{background:cell.on? cell.color: "#ffffff"}}
            onClick={updateCell(i)} 
            onContextMenu={updateCell(i, {state:offCell})}
            key={i} className={classes.cell}></div>)}
            
        </div>
    )
}
