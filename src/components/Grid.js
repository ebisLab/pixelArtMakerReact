import React from 'react';
import useStyles from '../Grid.styles'
import {createUseStyles } from 'react-jss'

const offCell={
    on:false,
    color: "yellow",

}

export default function Grid({currentColor, cells, setCells, val2}) {
    console.log("val-->", Number(val2))

    const useStyles2 = createUseStyles({
        grid2:{
            background:"red",
            display:"grid",
            gridTemplateRows:`repeat(${Number(val2.height)}, 1fr)`,
            gridTemplateColumns:`repeat(${Number(val2.width)}, 1fr)`,
            outline:"1px solid black",
        },
    
      })

    const classes= useStyles();
    const classes2= useStyles2();

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
        <>
        <div className={classes2.grid2}>
            {cells.map((cell, i)=><div 
            style={{background:cell.on? cell.color: "#ffffff"}}
            onClick={updateCell(i)} 
            onContextMenu={updateCell(i, {state:offCell})}
            key={i} className={classes.cell}></div>)}
            
        </div>
        </>
    )
}
