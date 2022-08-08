import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [messageList, setMessageList] = useState(
    [{ text: 'dsdavds', author: 'user' },
    { text: 'vjsdbjnj sdhnc jnd', author: 'bot' }]);

  const [value, setValue] = useState('');

  useEffect(() => {
    if (messageList[messageList.length - 1].author === 'user') {
      setTimeout(() => {
        setMessageList([...messageList, { text: 'answer from bot', author: 'bot' }])
      }, 2000)
    }
  }, [messageList])

  const clickHandler = () => {
    setMessageList([...messageList, { text: value, author: 'user' }]);
    setValue('');
  }

  const changeHandler = (event) => {
    setValue(event.target.value);
  }

  return (
    <React.Fragment >
      {messageList.map((message) => <div className='message'><span className='author'>{message.author}:</span>{message.text}</div>)}

      <textarea type='text' value={value} onChange={changeHandler} className='textarea'></textarea>
      <button type='button' onClick={clickHandler} className='send-message' >отправить</button>
    </React.Fragment>
  );
}

export default App;
