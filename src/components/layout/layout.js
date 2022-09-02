
import styles from './layout.module.css';

import React, { useRef, useEffect } from 'react';
import {  Routes, Route } from 'react-router-dom';

export function Layout ({ chats, messages}) {

    // const ref = useRef();
    // useEffect(() => {
    //     if (ref.current) {
    //         ref.current.scrollTo({
    //             top: ref.current.scrollHeight,
    //             left: 0,
    //             behavior: "smooth",
    //         });
    //     }
    // }, [messages])
    
return (
    <div className={styles.body}> 
        <div className={styles.content}>
            <div className={styles.chats}>
                {chats}
            </div>
            <div className={styles.messages}>
                
                <Routes>
                    <Route path=':userId' element={messages}/> 
                    <Route path='*' element={messages}></Route>
                </Routes>
               
            {/* <div ref={ref}>
            <Routes>
                <Route path='/profile/:userId' element={<div ref={ref}>
                {messages.map((message, index) => <Message message={message} key={index} />)}
            </div>}></Route>
            </Routes>
            </div> */}
                {/* {messages} */}
                </div>
        </div>
    </div>
)
}




