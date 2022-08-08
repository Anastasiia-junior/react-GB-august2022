import React, { useState } from 'react';
import './App.css';


function App() {
  const [messageList, setMessageList] = useState(
    [{text: 'dsdavds', author: 'user'}, 
    {text: 'vjsdbjnj sdhnc jnd', author: 'admin'}]);

  const [value, setValue] = useState('');

  const clickHandler = () => {
    setMessageList([...messageList, {text: value, author: 'user'}]);
    setValue('');
  }

  const changeHandler = (event) => {
    setValue(event.target.value);
  }

  return (
    <React.Fragment >
      {messageList.map((message) => <div>{message.author}:{message.text}</div>)}
     
      <textarea type='text'  value={value} onChange={changeHandler} className='textarea'></textarea>
      <button type='button'  onClick={clickHandler} className='send-message' >отправить</button>
    </React.Fragment>
  );
}

export default App;
