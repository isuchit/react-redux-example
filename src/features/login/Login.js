import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    setUser,
    logut,
    selectUser,
} from './loginSlice';
import styles from './Login.module.css';

function Login() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    let loginUser = () => {
        dispatch(
            setUser({
                user: 'suchit'
            })
        )
    }

    return (
        <div>
             <span className={styles.value}>I'm  a Login Component</span>
             <br />
             <span className={styles.value}>{user ? `Welcome ${user}` : 'Hello, Guest'}</span>
             <div className={styles.row}>
                <button className={styles.button} onClick={loginUser}>Log In</button>
                <br />
                <button className={styles.button} onClick={() => dispatch(logut())}>Logout</button>
            </div>
        </div>
    )
}

export default Login
