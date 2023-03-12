import './App.css';
import Upper from './Component/Upper';
import Lower from './Component/Lower';
import { useState } from 'react';
function App() {
  let details = navigator.userAgent;
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);
  const [device,changeDevice]=useState(isMobileDevice?"mobile":"desktop");
   
  window.addEventListener('resize',(eve)=>{
    if(document.documentElement.clientWidth>600){
      changeDevice("desktop");
    }
    else{
      changeDevice("mobile");
    }

  })
  return (
    <div className="App">
      <div className="App-header">
      <Upper device={{device}}/>
      <Lower device={{device}}/>
      </div>
    </div>
  );
}

export default App;
