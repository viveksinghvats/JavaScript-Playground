import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement('div', { id: "parent" }, React.createElement('div', { id: 'child' }, React.createElement('h1', { id: 'heading' }, 'I am h1 tag in a nested tag')));

console.log(parent);

const dom = ReactDOM.createRoot(document.getElementById('root'));
dom.render(parent);