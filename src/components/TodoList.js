import React from 'react'
import Todoitem from './Todoitem'

const TodoList = (props) => {
  return (
    <>
      <div className="container">
        <div className="card" >
          <ul className='list-group list-group-flush"'>
            {props.items.map((item, index) => {
              return <Todoitem key={index} item={item}
                removeitem={props.removeitem}
              ></Todoitem>
            })}
          </ul>

          <div className="card-footer">
            <button type='button' onClick={props.clearitems}
              className="btn btn-primary">clearitems</button>
          </div>
        </div>
      </div>
    </>


  )
}

export default TodoList
