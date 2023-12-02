import logo from './logo.svg';
import './App.css';

function App() {
  //declare variable
  let name = "ramdani salah-eddine";
  let note =18
  return (
    <div>
   <h2>welcome {name} to your react app</h2>
    {/*Conditions */}
    {note>10? <p>Admis</p> : <p>Non Admis</p>}
   <img src="logo192.png" alt="" />
   </div>
  );
}

export default App;
