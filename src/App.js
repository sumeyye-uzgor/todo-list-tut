import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


function App ()
{
  const [ inputVal, setInputVal ] = useState( '' )
  const [todoList, setTodoList] = useState([])
  const handleAddTodo = () =>
  {
    // setTodoList(todoList.push('abc'))
    setTodoList( prevTodoList => [ ...prevTodoList, inputVal ] );
    setInputVal('')
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
          todoList.map( ( todo ) =>
            <li key={ todo } className="todos__todo">
              <div className='todos__checkbox'>
                <input type="checkbox" id={ todo } name={ todo } checked></input>
                <label htmlFor={todo} className='todos__label'>{todo}</label>
              </div>
              <FontAwesomeIcon icon={ icon( { name: 'trash', style: 'solid' } ) } />
              <FontAwesomeIcon icon={icon({name: 'edit', style: 'solid'})} />
          </li>
          ) }
      </ul>

    </div>
  );
}

export default App;
