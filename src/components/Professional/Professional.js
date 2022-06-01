import React from 'react'
import ProfessionalItem from "./ProfessionalItem";
import './Professional.css';
import Card from '../UI/Card';
import Button from '../Button/Button';

const Professional = (props) => {

  return (
    <Card className='professional'>
      {props.items.map((professional) => 
        <ProfessionalItem 
          toggle = {props.toggle}       
          key={professional.id} 
          title={professional.title} 
          amount={professional.amount}
          yamount={professional.yamount}
          storage={professional.storage}        
          users={professional.users}
          send={professional.send}       
        ></ProfessionalItem> 
      )} 
        <Button />               
    </Card>
  )
}

export default Professional

