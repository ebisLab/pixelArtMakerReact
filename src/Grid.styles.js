import {createUseStyles } from 'react-jss'

export default createUseStyles({
  grid:{
    display:"grid",
    gridTemplateRows:"repeat(5, 1fr)",
    gridTemplateColumns:"repeat(8, 1fr)",
    width:"80vw",
    height:"50vh", 
    outline:"4px solid black",
  },
  cell:{
      cursor:"pointer",
    outline:"2px solid black",
    transition:"all 200ms linear", 
  }
})