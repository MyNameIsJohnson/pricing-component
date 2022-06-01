import React from 'react'
import BasicItem from "./BasicItem";
import './Basic.css';
import Card from '../UI/Card';
import Button from '../Button/Button';

const Basic = (props) => {

  return (
    <Card className='basic'>
      {props.items.map((basic) => 
        <BasicItem 
          toggle = {props.toggle}        
          key={basic.id} 
          title={basic.title} 
          amount={basic.amount} 
          yamount={basic.yamount}
          storage={basic.storage}        
          users={basic.users}
          send={basic.send}
        ></BasicItem>   
      )}
      <Button />      
    </Card>
  )
}

export default Basic

