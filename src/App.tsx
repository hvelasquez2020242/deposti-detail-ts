import React, {useState} from 'react';
import './App.css';
import Deposit from './components/depositDetails/deposit';
import { usuarios } from './shared/user';


function App() {
  const [usuario, setUsuario] = useState(usuarios)
  return (
    <Deposit usuario={usuario} setUsuario={setUsuario}/>

  );
}

export default App;
