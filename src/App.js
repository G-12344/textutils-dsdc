
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 
function App() {
  return (
    <>
<Navbar tittle= "textutils" aboutText="About us" hometxt="Home"/>
 <div className='p-5'>
    <TextForm/>
 </div> 
    </>
  );
}

export default App;
