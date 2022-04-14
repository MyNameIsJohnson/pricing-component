import './App.css';
import Basic from './components/Basic/Basic';
import Master from './components/Master/Master';
import Professional from './components/Professional/Professional';
import Toggle from './components/Toggle/Toggle';

import React, {useState} from 'react';
// import NewExpense from "./components/NewExpense/NewExpense";
import { BASIC_MONTHLY, PROFESSIONAL_MONTHLY, MASTER_MONTHLY, BASIC_ANNUALLY } from './data.js';

function App(){
  const [basic] = useState(BASIC_MONTHLY);
  const [professional] = useState(PROFESSIONAL_MONTHLY);
  const [master] = useState(MASTER_MONTHLY);
  const [basic_annually] = useState(BASIC_ANNUALLY)
  const [professional_annually] = useState(BASIC_ANNUALLY)
  const [master_annually] = useState(BASIC_ANNUALLY)
  // const addExpenseHandler = expense => {
  //   setExpenses(prevExpenses => {
  //     return [expense, ...prevExpenses]
  //   });
  // };
const [toggle, setToggle] = useState(false)


  return (
    <div className="container">
      <h1>Our Pricing</h1>
      <Toggle label="Annually" label2="Monthly" onClick={() => setToggle(!toggle)}/>
      {/* <NewExpense onAddExpense={addExpenseHandler}/> */}
      <Basic items={basic}/>
      <Professional items={professional}/>
      <Master items={master}/>
      <Basic items={basic_annually}/>
      <Professional items={professional_annually}/>
      <Master items={master_annually}/>
    </div>
  );
}

export default App;
