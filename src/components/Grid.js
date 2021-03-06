import React, { useState, createRef } from 'react';
import useStyles from '../Grid.styles'
import {createUseStyles } from 'react-jss'
import Pdf from "react-to-pdf";

const offCell={
    on:false,
    color: "yellow",

}

const ref = createRef();
const options = {
    orientation: "landscape",
    
    unit: "in",
  };

export default function Grid({currentColor, cells, setCells, val2}) {
    const [isClicked, setIsClicked]=useState(false)


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
    


    const dragAction =()=>{
        setIsClicked(true)
    }

    const mouseUp=(e)=>{
        setIsClicked(false)

    }

    const mouseOver=(e)=>{
        function makePixel(e) {
            e.target.style.background=currentColor;
         }
        if(isClicked){
            makePixel(e)
        }
    }
  

    return (
        <>
              <Pdf targetRef={ref} options={options} filename="reactimg.pdf">
        {({ toPdf }) => <button onClick={toPdf} style={{margin:10}}>Save Image </button>}
      </Pdf>
        <div className={classes2.grid2} ref={ref} options={options}>
            {cells.map((cell, i)=><div 
            style={{background:cell.on? cell.color: "#ffffff"}}
            onClick={updateCell(i)} 
            onMouseDown={dragAction}
            onMouseOver={mouseOver}
            onMouseUp={mouseUp}
            onContextMenu={updateCell(i, {state:offCell})}
            key={i} className={classes.cell}></div>)}
            
        </div>
        </>
    )
}
