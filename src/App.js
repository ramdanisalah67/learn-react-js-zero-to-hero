import logo from './logo.svg';
import './App.css';
import about from './About';
import Employee from './Employee';
import Info from './Info';
import Student from './Student'
import User from './User';
import Product from './Product'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  //declare variable
  let name = "ramdani salah-eddine";
  let note =18
  return (
    <div>
      {/* Routes */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Student' element={<Student/>}/>
        <Route path='/Users' element={<User/>}/>
        <Route path='/Employee' element={<Employee/>}/>
        <Route path='/product' element={<Product/>}/>

      </Routes>
      </BrowserRouter>
     
   </div>
  );
}

export default App;
