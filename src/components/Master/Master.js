import React from 'react'
import MasterItem from "./MasterItem";
import './Master.css';
import Card from '../UI/Card';
import Button from '../Button/Button';

const Master = (props) => {

  return (
    <Card className='master'>
      {props.items.map((master) => 
        <MasterItem
          toggle = {props.toggle}        
          key={master.id} 
          title={master.title} 
          amount={master.amount}
          yamount={master.yamount}
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

