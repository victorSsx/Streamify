import { useState } from "react";
import { Axios } from "axios";
import { useHistory } from "react-router-dom";
import  "./login.css";

const Login = () => {

    const [userame, setUsername] = ('');
    const [password, setPassword] = ('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username === 'admin' && password === '1234'){
            localStorage.setItem('isLoggedIn', 'true');
		history.push('./mainPage');
        } else{
            alert('usuario não encontrado!');
        }
    }

    return(
        <>
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username: 
                    <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                    </label>
                    <br />
                    <label>Senha: 
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </label>
                    <button type="submit">Entrar</button>
            </form>
        </div>
        </>
    );
}

export default Login;