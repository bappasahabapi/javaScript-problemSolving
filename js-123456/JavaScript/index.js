import React from 'react';
import ReactDOM from 'react-dom';

// using javaScript to html file 
const bapiTitle = "This is JSX";
const bapiDesc = "By using jsx , we can write html code in javaScript";
const date = " 20/6/21";


ReactDOM.render(
  <div>

    <h1> HTML LAYOUT </h1>
    <h3>{bapiTitle}</h3>
    <p> {bapiDesc} </p>
    <p>{date} </p> 
    <p> {new Date().getFullYear()} </p>

    {/* <p> get the full year: {new Date().getFullYear()} </p> */}
    {/* <h3> This is JSX</h3> */}
    {/* <p> By using jsx , we can write html code in javaScript. </p> */}
    {/* <p> 20/6/21</p> */}
   
    

  </div> ,
  document.getElementById('root')
);