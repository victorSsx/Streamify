import {} from "react"
import {useHistory} from "react-router-dom"
const Login = () => {

    const [username, setUsername] = ('')
    const [password, setPassword] = ('')
    const history = useHistory('')

    const handleSubmit = (e) => {
        e.preventDefault('');

        if(username === 'admin' && password === '1234'){
            localStorage.setItem('isLoggedIn', 'true');
		history.push('/main');
        } else(
            alert('usuario ou senha incorreta!')
        )
    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} >
                <label>Username
                    <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                </label>
                <br />
                <label>Password:
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
    )
}

export default Login