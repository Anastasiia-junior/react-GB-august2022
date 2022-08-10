import classes from './message.module.css'

export const Message = ({message}) => {
    return ( 
        <div className={classes.text}>
            <h3>{message.author}</h3>
            <p>{message.text}</p>
            <p>21:43</p>
        </div>
    )
}

