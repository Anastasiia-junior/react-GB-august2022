import classes from './message.module.css'

export const Message = (props) => {
    return ( 
        <div className={classes.text}>
            {props.text}
        </div>
    )
}

