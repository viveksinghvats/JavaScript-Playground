import React from "react";
import ReactDOM from "react-dom";

// const reactHeading = React.createElement('h1', {id: 'heading'}, 'Hello from react');
// const jsxHeading = <h1 id ='heading'>Hello from react</h1>

// console.log(reactHeading);  Both are same.
// console.log(jsxHeading);  

const Title = () => (
    <div>
        <h1>Title Functional Component</h1>
    </div>
);

const loop = (fun) => {
    for (let i = 0; i < 5; i++) {
        fun()
    }
}

const Heading = () => {
    return (
        <div>
            <Title />
            {Title()}
            <Title></Title>
            <h1 id='heading'> Heading Functional Component</h1>
             
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading />);