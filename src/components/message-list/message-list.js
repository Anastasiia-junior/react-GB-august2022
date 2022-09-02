
import { InputAdornment } from '@mui/material';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Message } from './Message';
import { MyInput, SendIcon } from './styles';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { sendMessage, deleteMessage } from '../../store/dialogs-reducer/action'


export function MessageList() {

    // const [messageList, setMessageList] = useState({
    //     1: [{ text: 'Hello', author: 'User' }, { text: 'Hello', author: 'bot' }],
    //     2: [{ text: 'Hello', author: 'bot' }],
    //     3: [],
    //     4: []
    // });

    const{ userId } = useParams();


    const messageList = useSelector(state => state.dialogs.messageList);
    
    const messages = messageList[userId] ?? [];
    
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const clickHandler = useCallback((message, author = 'user') => {
        if (message) {
            dispatch(sendMessage({message, author}, userId ))
        }
        setValue('');
    }, [userId, dispatch]);

    useEffect(() => {

        let timerId = null;

        if (messages.length && messages[messages.length - 1].author === 'user') {

            timerId = setTimeout(() => {
                clickHandler('answer from bot', 'bot' )
            }, 2000);
        };

        return () => {
            clearInterval(timerId)
        };
    }, [messages, clickHandler]);

    

    const changeHandler = (event) => {
        setValue(event.target.value);
    }

    const handlePressInput = ({ code }) => {
        if (code === 'Enter') {
            clickHandler(value);
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
    }, [messages]);

    

    return (
        <React.Fragment >
            <div ref={ref}>{messages.map((message, index) => <Message userId={userId} message={message} key={index} />)}
            </div>

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
