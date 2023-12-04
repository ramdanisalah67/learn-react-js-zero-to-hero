import { Component } from "react";
import { Color } from "three";

class Student extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            name : "ahmed",
            note :18,
            mystyle :{
                color:"green",
                "font-weight":"bold",
                
            },
            noteInput : 0
        }

    }

    changeState = (event)=>{
        alert("event.target.value")
       this.setState({note:19,name:"yassine"})
    }
    render(){
        return(
            <div>
            Student Name :
            <input type="number"  className="form-Control" />
            <button onChange={this.changeState} className="btn"  >Change State</button>
            <div>hello This is  Student Section state saved one  student object his value is <span style={this.state.mystyle}> -- name : {this.state.name} </span> </div>
            <div>
                {this.props.myEmail}
            </div>
            
            </div>
        )
    }
}

export default Student