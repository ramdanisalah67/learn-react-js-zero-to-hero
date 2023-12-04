import { Component } from "react";

class User extends Component {

    constructor(props){
        super(props)
        this.state = {
            users:[],
            myStyle:{
                "text-align":"center"
            }
        }
   
    }
    //Http Request
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result =>this.setState({users:result}))
        .catch(error => console.error('Error fetching data:', error));

    }
    render(){
        return (
            <div>
                {this.state.users.map((user,index)=>
                
                {
                    return ( <p style={this.state.myStyle}> {user.name} </p>) ;
                }
                
                )}
            </div>
        )
    }
}
export default User