
import { InputAdornment } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { Message } from './Message';
import { MyInput, SendIcon } from './styles';
import { useParams, Routes, Route } from 'react-router-dom';


export function MessageList() {

    const [messageList, setMessageList] = useState({
        1: [{ text: 'Hello', author: 'User' }, { text: 'Hello', author: 'bot' }],
        2: [{ text: 'Hello', author: 'bot' }],
        3: [],
        4: []
    });

    const{ userId } = useParams();
    
    const [messages, setMessages] = useState([messageList[userId] ?? []]);
console.log(messages);

    const [value, setValue] = useState('');

    useEffect(() => {

        let timerId = null;

        if (messages.length && messages[messages.length - 1].author === 'user') {

            timerId = setTimeout(() => {
                setMessages([...messages, { text: 'answer from bot', author: 'bot', date: new Date() }])
            }, 2000);
        };

        return () => {
            clearInterval(timerId)
        };
    }, [messages]);

    const clickHandler = () => {
        if (value) {
            setMessages([...messages, { text: value, author: 'user', date: new Date() }]);
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

    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo({
                top: ref.current.scrollHeight,
                left: 0,
                behavior: "smooth",
            });
        }
    }, [messages])

    return (
        <React.Fragment >
            <div ref={ref}>{messages.map((message, index) => <Message message={message} key={index} />)}
            </div>
            
            {/* <div ref={ref}>
            <Routes>
                <Route path='/profile/:userId' element={<div ref={ref}>
                {messages.map((message, index) => <Message message={message} key={index} />)}
            </div>}></Route>
            </Routes>
            </div> */}

            <div>
                <MyInput
                    autoFocus={true}
                    fullWidth={true}
                    placeholder='Введите сообщение'
                    type='text'
                    value={value}
                    onChange={changeHandler}
                    onKeyPress={handlePressInput}
                    endAdornment={
                        <InputAdornment position='end'>
                            {value && <SendIcon onClick={clickHandler} />}
                        </InputAdornment>}
                />

            </div>
        </React.Fragment>
    );
}
