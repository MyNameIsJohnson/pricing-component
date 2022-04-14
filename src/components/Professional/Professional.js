import React from 'react'
import ProfessionalItem from "./ProfessionalItem";
import './Professional.css';
import Card from '../UI/Card';
import Button from '../Button/Button';

const Professional = (props) => {
  // const [filteredYear, setFilteredYear] = useState('2020');

  // const filterChangeHandler = selectedyear => {
  //   setFilteredYear(selectedyear)
  //  }
  return (
    <Card className='professional'>
      {/* <professionalsFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/> */}
      {props.items.map((professional) => 
        <ProfessionalItem 
          key={professional.id} 
          title={professional.title} 
          amount={professional.amount}
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

