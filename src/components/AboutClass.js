import React from "react";

class AboutClass extends React.Component 
{
    constructor(props) 
    {
        super(props)
        this.state = {
            count : 0 
        }
        console.log("Constructor called")
    }

    componentDidMount()
    {
        console.log("component Mounted Succesfully")
    }

    render()
    {
        const {count} = this.state;
        console.log("Rendered Called")
        return(
            <div className="userInfo">
                <h1>I have been here</h1>
                <h1>Inside Class Based Component</h1>
                <h2>Name : {this.props.name}</h2>
                <h1>Count : {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1 
                    })
                }}>Click me to increase the count</button>
            </div>
            
            
        )
        
    }
}

export default AboutClass;