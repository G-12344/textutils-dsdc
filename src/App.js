import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Github from './components/Github'


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState('null')

  const showAlert = (type,message)=>{
    setAlert({type:type, message:message})
    //settimeout

    setTimeout(()=> setAlert(null),1500);
  };
  const handleMode = () =>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('success','light mode is enabled');
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert('success','dark mode is enabled');
     }
  }
  return (
    <>
    <BrowserRouter>
  
    <Navbar mode={mode} handleMode={handleMode}  title="TextUtils" aboutText="About Us" /> 
    <Alert alert={alert}/>
    <div className="p-5">
       <Routes>
       <Route 
       path="/"
       element={<TextForm showAlert={showAlert} mode={mode}/>}
       />
       <Route path="/About" element={<About/> }/>
       <Route path="/github" element={<Github /> }/>
      
      </Routes>
    </div>
    </BrowserRouter>
    </>
    
    );
}

export default App;