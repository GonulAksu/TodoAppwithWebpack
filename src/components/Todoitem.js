import React from 'react'



const Todoitem = (props) => {

  return (
    <>  
        <li className='list-group-item'>{props.item} &nbsp;
            <button onClick={()=>{props.removeitem(props.item)}} type="button" className='btn'>
            <i className='fa fa-remove'></i>
            </button>
            </li>
    </>
  )
}

export default Todoitem
