import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from "react-router-dom";

import './Login.scss';
import LoginLogo from '../assets/login-logo.png';

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const [ responded, setResponded] = useState(false);
    const [ responsMsg, setRespondMsg] = useState('');

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = (data, e) => {

        fetch(process.env.REACT_APP_ADMIN_LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(data => {
            setResponded(true);
            setRespondMsg(data.message);
            if (data.status === 'ok') {
                localStorage.setItem("token", data.token);
                history.replace(from);
            }
        })
        .catch(err => console.log(err))
    };

    return (
        <div className="login-container">
            <img src={LoginLogo} alt="login logo" />
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Username" name="username" ref={register({required: true, min: 2, maxLength: 80})} />
                {errors.username && <span className="error-msg">Detta fält måste fyllas i</span>}

                <input type="password" placeholder="Password" name="password" ref={register({required: true, min: 1})} />
                {errors.password && <span className="error-msg">Detta fält måste fyllas i</span>}

                <input type="submit" value="Logga in"/>
            </form>
                {responded && <span>{responsMsg}</span>}
        </div>
    )
}

export default Login
