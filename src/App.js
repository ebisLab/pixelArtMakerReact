import './App.css';
import React, {useState} from 'react'
import Grid from './components/Grid';
import ColorPicker from './components/Colorpicker'
import useStyles from './App.styles'


function App() {

  const [currentColor, setCurrentColor] = useState("#56bc58");

  const classes= useStyles();

  return (
    <div className={classes.app}>
      <ColorPicker currentColor={currentColor} setCurrentColor={setCurrentColor} />
          <Grid 
          currentColor={currentColor}
          // cells={cells}
           />
    </div>

  );
}

export default App;
