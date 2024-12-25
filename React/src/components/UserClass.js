import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        console.log('About constructor called');
        super(props);
        this.state = {
           userInfo: {
            name: 'Dummy',
            location: 'Default'
           } 
        }
    }

    async componentDidMount(){
      const apiData = await fetch('https://api.github.com/users/viveksinghvats');
      const json = await apiData.json();
      console.log(json);
      this.setState({
        userInfo: json
      });
    }

    componentDidUpdate(){
        console.log('component updated');
        this.timer = setInterval(() => {
            console.log('Set timeout called');
          }, 1000);
    }

    componentWillUnmount(){
        console.log('component unmounted');
        clearInterval(this.timer);
    }

    render() {
        console.log('About render called');
        const {name} = this.props;
        const {count, count2} = this.state;
        return (<div className="user-card">
            <h2>Name: {this.state.userInfo.name}</h2>
            <h3>Location: {this.state.userInfo.location}</h3>
            <h4>Contact: @vivek4554</h4>
            {/* <h4>Count2: {count2}</h4>
            <h4>Count: {count}</h4>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 2
                })
            }}>Count Increase</button> */}
        </div>);
    }
}

export default UserClass;


