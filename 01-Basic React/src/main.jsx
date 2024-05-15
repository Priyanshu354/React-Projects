import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function NewFun(){
  return (
    <h1> I am learning React !! </h1>
  );
};

// here i can return my Newfun as well
// i can also do Newfun() like this , but it's a bad pratice//

const anotherElement = (
  <a href="https://google.com"> visit me to google </a>
);

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com'},
  'click me to visit google'
)

// that is react create element.....

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
