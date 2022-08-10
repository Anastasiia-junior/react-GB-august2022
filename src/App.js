import React, { useEffect, useState } from 'react';
import './App.css';
import { Message } from './components/Message/Message';


function App() {
  const [messageList, setMessageList] = useState([]);

  const [value, setValue] = useState('');

  useEffect(() => {

    let timerId = null;

    if (messageList.length && messageList[messageList.length - 1].author === 'user') {

      timerId = setTimeout(() => {
        setMessageList([...messageList, { text: 'answer from bot', author: 'bot', date: new Date() }])
      }, 2000);
    };

    return () => {
      clearInterval(timerId)
    };
  }, [messageList]);

  const clickHandler = () => {
    if (value) {
      setMessageList([...messageList, { text: value, author: 'user', date: new Date() }]);
      setValue('');
    }
  }

  const changeHandler = (event) => {
    setValue(event.target.value);
  }

  const handlePressInput = ({ code }) => {
    if (code === 'Enter') {
      clickHandler();
    }
  }

  return (
    <React.Fragment >
      <div>
        {messageList.map((message, index) => <Message message={message} key={index} />)}
      </div>

      <div>
        <textarea type='text'
          value={value}
          onChange={changeHandler}
          onKeyPress={handlePressInput}
          className='textarea'></textarea>
        <button type='button' onClick={clickHandler} className='send-message' >отправить</button>
      </div>
    </React.Fragment>
  );
}

export default App;
