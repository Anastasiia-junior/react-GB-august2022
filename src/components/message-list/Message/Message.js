import styles from './message.module.css';
import classNames from 'classnames';
import { useDispatch } from 'react-redux/es/exports';
import {deleteMessage} from '../../../store/dialogs-reducer/action';

export const Message = ({message, userId}) => {
    const dispatch = useDispatch();

    const onDeleteMessage = () => {
        dispatch(deleteMessage(message.id, userId))
    }


    return ( 
        <div className={classNames(styles.message, 
        {[styles.currentMessage]: message.author === 'user'})}>
            <h3>{message.author}</h3>
            <p>{message.message}</p>
            <p>21:43</p>
            <button onClick={() => {
                onDeleteMessage()
            }}>x</button>
        </div>
    )
}

