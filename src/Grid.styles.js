import {createUseStyles } from 'react-jss'


export default createUseStyles({
  grid:{

    display:"grid",
    outline:"1px solid black",
  },
  cell:{
      cursor:"pointer",
      width:"25px",
      height:"25px", 
    outline:"1px solid black",
    transition:"all 200ms linear", 
  }, 
})