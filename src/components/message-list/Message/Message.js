import styles from './message.module.css';
import classNames from 'classnames';

export const Message = ({message}) => {
    return ( 
        <div className={classNames(styles.message, 
        {[styles.currentMessage]: message.author === 'user'})}>
            <h3>{message.author}</h3>
            <p>{message.message}</p>
            <p>21:43</p>
        </div>
    )
}

