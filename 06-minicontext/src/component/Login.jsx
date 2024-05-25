import React,{useState, useContext} from 'react'
import UserContext from '../context/Usercontext'

function Login() {
    const [username,SetUsername] = useState('');
    const [password,SetPassword] = useState('');

    const {SetUser} = useContext(UserContext);

    function handleSubmit (){
        SetUser({username,password});
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" 
        value={username}
        onChange={(e) => SetUsername(e.target.value)}
        placeholder='username' />

        <input type='text' 
        value={password}
        onChange={(e) => SetPassword(e.target.value)}
        placeholder='password'></input>

        <button onClick={handleSubmit} > Submit </button>
    </div>
  )
}

export default Login