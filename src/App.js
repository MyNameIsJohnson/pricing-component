import './App.css';
import Basic from './components/Basic/Basic';
import Master from './components/Master/Master';
import Professional from './components/Professional/Professional';
import Toggle from './components/Toggle/Toggle';
import React, {useState} from 'react';
import { BASIC_MONTHLY, PROFESSIONAL_MONTHLY, MASTER_MONTHLY} from './data.js';

function App(props){
  const [basic] = useState(BASIC_MONTHLY);
  const [professional] = useState(PROFESSIONAL_MONTHLY);
  const [master] = useState(MASTER_MONTHLY);
  const [toggle, setToggle] = useState(false)

  function click(){
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <h1>Our Pricing</h1>
      <Toggle label="Annually" label2="Monthly"  click={click}/>
      <div className="container">
        <Basic items={basic} toggle={toggle}/>
        <Professional items={professional} toggle={toggle}/>
        <Master items={master} toggle={toggle} />
      </div>
    </div>
  );
}

export default App;
