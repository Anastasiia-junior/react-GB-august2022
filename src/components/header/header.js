import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

export function Header () {
let menu = [
    {title: 'Home Page', to: '/'},
    {title: 'Chats', to: '/chatPage'},
    {title: 'Profile Page', to: '/profile'},
    {title: 'Gists Page', to: '/gists'}
]

    return (
        <div className={styles.header}>
           {menu.map( (e) => {
            return (<NavLink key={e.to} to={e.to}><div>{e.title}</div></NavLink>)
           })}
    </div>
    )
    };