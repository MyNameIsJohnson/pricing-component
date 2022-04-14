import React from 'react'
import BasicItem from "./BasicItem";
import './Basic.css';
import Card from '../UI/Card';
import Button from '../Button/Button';

const Basic = (props) => {
  // const [filteredYear, setFilteredYear] = useState('2020');

  // const filterChangeHandler = selectedyear => {
  //   setFilteredYear(selectedyear)
  //  }
  console.log(props)
  return (
    <Card className='basic'>
      {/* <BasicsFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/> */}
      {props.items.map((basic) => 
      
        <BasicItem 
          key={basic.id} 
          title={basic.title} 
          amount={basic.amount} 
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
  // }

