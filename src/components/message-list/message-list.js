
import { InputAdornment } from '@mui/material';
import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { Message } from './Message';
import { MyInput, SendIcon } from './styles';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { sendMessageWithBot, messageSelector } from '../../store/dialogs-reducer';


export function MessageList() {

    const{ userId } = useParams();


    const selector = useMemo( () => messageSelector(userId), [userId]);

    const messages = useSelector(selector);
    
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const clickHandler = useCallback((message, author = 'user') => {
        if (message) {
            dispatch(sendMessageWithBot({message, author}, userId ))
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
