import React, { useState, useEffect } from "react";
import './Login.scss';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login, logout} from '../../store/reducers/user'
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispath = useDispatch();
    //reduex
    const naviagte =useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // 判断用户名和密码是否为空
        if (!username || !password) {
            alert('请输入用户名和密码');
            return;
        }
        let obj = {
            username,
            token:'xxxxxewgaergaeg',
            isLogin: true
        }
        //将数据存储在redux里面
        dispath(login(obj))
        //    调用登录接口
        //设置存储,把用户名存储在key中
        // const userDetails = {user:username, pwd:password}
        localStorage.setItem('userDetails', JSON.stringify(obj));
        naviagte('/')

    }
    useEffect(()=>{

    },[])

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
            <h2>用户登录</h2>
            <div className="login_box">
                <input type="text"
                       value={username}
                       onChange={(event) => setUsername(event.target.value)}
                       placeholder="请输入用户名"/>
                <label>账号</label>
                {/*<label className="msg">{msg}</label>*/}
            </div>
            <div className="login_box">
                <input type="password"
                       value={password}
                       onChange={(event) => setPassword(event.target.value)}
                       placeholder="请输入密码" />
                    <label>密码</label>
                {/*<label className="msg">{msg}</label>*/}
            </div>
           <button  type="submit">登录</button>
            </form>
        </div>

    )
}