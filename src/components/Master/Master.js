import React from 'react'
import MasterItem from "./MasterItem";
import './Master.css';
import Card from '../UI/Card';
import Button from '../Button/Button';

const Master = (props) => {
  // const [filteredYear, setFilteredYear] = useState('2020');

  // const filterChangeHandler = selectedyear => {
  //   setFilteredYear(selectedyear)
  //  }
  return (
    <Card className='master'>
      {/* <MastersFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/> */}
      {props.items.map((master) => 
        <MasterItem 
          key={master.id} 
          title={master.title} 
          amount={master.amount}
          storage={master.storage}        
          users={master.users}
          send={master.send}       
        ></MasterItem>                
      )} 
      <Button />
    </Card>
  )
}

export default Master

