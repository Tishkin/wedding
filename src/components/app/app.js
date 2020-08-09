import React from 'react';
import './global.css'
import {useStylesApp} from "./app-style";
import Content from "../content";
import QuestionItem from "../question-item";

function App() {
  const classes = useStylesApp();
  return (
    <div className={classes.app}>
     <Content/>
    </div>
  );
}

export default App;
