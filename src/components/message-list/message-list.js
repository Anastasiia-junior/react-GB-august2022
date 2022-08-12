
import { InputAdornment } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { Message } from './Message';
import { MyInput, SendIcon } from './styles';


export function MessageList() {

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

    const ref = useRef(); 
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo({
                top: ref.current.scrollHeight,
                left: 0,
                behavior: "smooth",});
        }
    }, [messageList])
    return (
        <React.Fragment >
            <div ref={ref}>
                {messageList.map((message, index) => <Message message={message} key={index} />)}
            </div>

            <div>
                <MyInput
                    fullWidth={true}
                    placeholder='Введите сообщение'
                    type='text'
                    value={value}
                    onChange={changeHandler}
                    onKeyPress={handlePressInput}
                    endAdornment={<InputAdornment position='end'>
                        {value && <SendIcon onClick={clickHandler} />}
                    </InputAdornment>}
                />

            </div>
        </React.Fragment>
    );
}
