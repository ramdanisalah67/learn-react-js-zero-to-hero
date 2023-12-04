import {Component} from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component{
 constructor(props){
  super(props) ;
 this.state = {
  mystyle :{
    "font-weight":"bold",
    "margin":"0px 20px",
    "color":"black",
    "text-decoration":"none"
  }
 }
}
 render(){

    return(<>
            <div>welcome to Navbar</div>
            <nav className='nav'>
            <Link to="/Students" style={this.state.mystyle} >Students</Link>
              <Link to="/Employee" style={this.state.mystyle} >Employee</Link>
              <Link to="/Users" style={this.state.mystyle}>Users</Link>
              <Link to="/Product" style={this.state.mystyle}>Product</Link>
              <Link to="/Info" style={this.state.mystyle}>Info</Link>

            </nav>


            </>
           )
}
}
export default Navbar;