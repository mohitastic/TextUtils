import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState('dark'); // set dark light mode

  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='grey';
    }else {
      setMode('dark')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>   
      <Navbar title="TextUtils" aboutText="aboutTexting" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
      </div> 
    </>
  );
}

export default App;
