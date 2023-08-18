import React, {useState} from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom';
import {auth} from './firebase'

function Login() {
    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

        const signIn = e => {
            e.preventDefault();
            auth.signInWithEmailAndPassword(email, password)
            .then(auth =>
                navigate('/'))
                .catch(error => alert(error.message))
        }
        const register = e => {
            e.preventDefault();
            auth.createUserWithEmailAndPassword(email, password).then((auth) => {
                if(auth){
                    navigate('/')
                }  
            }).catch(error => alert(error.message))
        }
    return (
        <div className = 'login'>
        <Link to = '/'>
        <img className = 'login__logo' alt = '' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
        </Link>
        <div className = 'login__container'>
        <h1>SignIn</h1>
        <form>
        <h5>E-mail</h5>
        <input type = 'text' value = {email} onChange = {e => setEmail(e.target.value)}/>
        <h5>Password</h5>
        <input type = 'password' value = {password} onChange = {e => setPassword(e.target.value)}/>
        <button type = 'submit' className = 'login__signInButton' onClick = {signIn}>Sign In</button>
        <p>By sign-in you agree to Amazon FAKE CLONE's conditions of use and sale. Please see our privacy Notice, our cookies notice and our interest-based Ads Notice.</p>
       <button onClick = {register} className = 'login__registerButton'>Create an account</button>
        </form>
        </div>
        </div>
   
    )
}

export default Login
