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

    render(){

        const changeName = (event)=>{
            this.setState({name:event.target.value})
        }
        return(
            <div>
            Student Name :
            <input type="text"  className="form-Control" onChange={changeName} />
            Note 
            <input type="number"  className="form-Control" />

            <button onClick={changeName} className="btn"  >Change State</button>
            <div>hello This is  Student Section state saved one  student object his value is <span style={this.state.mystyle}> -- name : {this.state.name} </span>
            ---- note {this.state.note}
             </div>
            <div>
                {this.props.myEmail}
            </div>
            
            </div>
        )
    }
}

export default Student