import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { v4 as uuidv4 } from 'uuid';
import { isEditable } from '@testing-library/user-event/dist/utils';

function App ()
{
  const [ inputVal, setInputVal ] = useState( '' )
  const [ editVal, setEditVal ] = useState( '' )

  const [todoList, setTodoList] = useState([])
  const handleAddTodo = () =>
  {
    // setTodoList(todoList.push('abc'))
    setTodoList( prevTodoList => [ ...prevTodoList, {
      id: uuidv4(),
      todo: inputVal,
      isChecked: false,
      isEditable: false
    } ] );
    setInputVal('')
  }
  const handleTodoCheck = (id) => {
    setTodoList( prevTodoList => prevTodoList.map(item => item.id ===id ? ({...item, isChecked: !item.isChecked}) : item) );
  }
  const handleTodoDelete = (id) => {
    setTodoList( prevTodoList => prevTodoList.filter(item => item.id !== id ) );
  }
  const handleTodoEdit = (id) => {
     setTodoList( prevTodoList => prevTodoList.map(item => item.id ===id ? ({...item, isEditable: true}) : item) );
  }
  const handleTodoSave = (id) => {
      console.log('save', id)
    // setTodoList( prevTodoList => prevTodoList.map(item => item.id ===id ? ({...item, isChecked: !item.isChecked}) : item) );
  }
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <div className='form'>
        <input className="form__input" placeholder='Type something to add' onChange={ ( event ) => setInputVal( event.target.value ) } value={ inputVal } />
        <button className='form__button' onClick={ handleAddTodo }>Add Todo</button>
      </div>
      <ul className='todos'>
        { todoList.length > 0 &&
          todoList.map( ( item ) =>
            <li key={ item.id } className="todos__todo">
              <div className='todos__checkbox'>
                <input type="checkbox" id={ item.id } name={ item } onChange={()=> handleTodoCheck(item.id)} checked={item.isChecked}></input>
                { item.isEditable ?
                  <input className="form__input" placeholder={ item.todo } onChange={ ( event ) => setEditVal( event.target.value ) } value={ editVal } /> :
                  <label htmlFor={ item.id } className='todos__label'>{ item.todo }</label> }
              </div>
              <FontAwesomeIcon icon={ icon( { name: 'trash', style: 'solid' } ) } onClick={()=> handleTodoDelete(item.id)}/>
              { item.isEditable ?
                <FontAwesomeIcon icon={ icon( { name: 'save', style: 'solid' } ) } onClick={ () => handleTodoSave( item.id ) } /> :
                <FontAwesomeIcon icon={ icon( { name: 'edit', style: 'solid' } ) } onClick={ () => handleTodoEdit( item.id ) } /> }  
          </li>
          ) }
      </ul>

    </div>
  );
}

export default App;




/// component ==> edit & save