import React from 'react'
import './MasterItem.css'

const MasterItem = (props) => {

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

export default MasterItem