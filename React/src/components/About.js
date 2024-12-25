import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div>
            <h1>About page</h1>
            <UserClass name={"Vivek"}/>
        </div>
    );
  }
}


export default About;