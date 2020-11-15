import React,{useState} from 'react';
import useStyles from '../Grid.styles'

const initialCells = Array.from({length:40},()=>({
    on:false,
    color: "yellow",

}))

export default function Grid({currentColor}) {
    const [cells, setCells]=useState(initialCells)

    const classes= useStyles();
    const updateCell=(i)=>()=>{
        setCells(cells.map((cell,cellindex)=>{
            if(cellindex === i){
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
            key={i} className={classes.cell}></div>)}
            
        </div>
    )
}
