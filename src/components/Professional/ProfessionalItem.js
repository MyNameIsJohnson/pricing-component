import React from 'react'
import './ProfessionalItem.css'

const ProfessionalItem = (props) => {

  // const [title, setTitle] = useState(props.title);
  // console.log('ProfessionalItem evaluated by React')


  // const clickHandler = () => {
  //   setTitle('Updated')
  //   console.log(title)
  // }

  return (
    <div className='items'>
      <div className='item__description'>
        <h2>{props.title}</h2>
        {props.toggle ? (
          <div className='item item__price'> ${props.amount} </div>
        ):(
          <div className='item item__price'> ${props.yamount} </div>
        )}
        <div className='item item__storage'> {props.storage} </div>
        <div className='item item__users'> {props.users} </div>
        <div className='item item__send'> {props.send} </div>
      </div>
        {/* <button onClick={clickHandler}>Change title</button> */}
    </div>
  )
}

export default ProfessionalItem