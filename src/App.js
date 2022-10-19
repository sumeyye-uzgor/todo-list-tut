import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState}  from 'react'

// jsx => html ve  js 
function App ()
{
  //state depolamak icin
  const [ inputVal, setInputVal ] = useState( '' )
  const [todoList, setTodoList] = useState([])
  // const [ count, setCount ] = useState( 0 )
  // setInputVal('a')
  // setCount(prevCount => prevCount+1)
  // {
  //   let inputVal = '';
  //   function setInputVal(a){
  //     inputVal = a
  //   }
  // }
  // let inputVal = '';
  const handleAddTodo = () =>
  {
    // todoList.push(inputVal)
    setTodoList( prevTodoList => [ ...prevTodoList, inputVal ] );
    setInputVal('')
  }
  // useEffect(() => {}, []), array in adi => dependancy array 
  useEffect( () =>
  {
    console.log('abc')
  }, [] ) // eger dependancy array bossa componentDidMount gibi calisir, eger icinde degisken varsa componentDidIpdate gibi calisir
  
  useEffect( () =>
  {
    
    return () =>
    {
      
    }
   } ,[]) // return deki fonksiyon componentWillUnmount gibi calisir
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <input onChange={ ( event ) => setInputVal( event.target.value ) } value={ inputVal } />
      {
        // value => koddaki degisikligi kullanicinin gorebilmesi icin
        // onChange de kullanicinin yaptigi degisikligin koda yansimasi icin
      }
      <button onClick={handleAddTodo}>Add Todo</button>
      {/* <p> { inputVal } </p> */}
      { todoList.length>0 && todoList.map( ( todo ) => <div key={todo}>{ todo }</div>)}
      {
        //javascript yazabilirsin
      }
    </div>
  );
}

export default App;

// virtual dom, dom 

// DOM nedir?  Document Object Model 
// DOM Manuplation => bir elementin kullanici tarafindan guncellenmesi
// event listener yardimiyla dinledigin bir component degisiminde baska bir componenti degistirmek
// button.eventListener('click', () => {document.getElementById('baslik').text = 'Degisim'})

// Virtual DOM => DOM kopyasi

// Class Componentler


// card => title 
// Header => Card in child i  title guncelleyebiliyorum


// Card =>
//   let title= ''
//   < h1 > title</h1 >
    
// Hedear => <button onClick={title= 'Hello'}>Change Title</button>

// Single Source of Truth

//Class Components 
// object oriented javascript
// const leon = {
// name: 'Leon1 '
// color: 'blue'
//   age: 2
// }
// class Leon {
// name: String, 
//   color: String,
//       age: Number
  // sound: 'roar'
// }

// const leon1  = new Leon ('leaon1', 'blue', 3)
// function based javascriot => functionlarin normal variable gibi kullanilabilmesi
// const abc= () => {}

