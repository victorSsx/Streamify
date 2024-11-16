import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState(''); // Correção: usar useState corretamente
  const [password, setPassword] = useState(''); // Correção: usar useState corretamente
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Correção: Remover o argumento do preventDefault()

    if (username === 'admin' && password === '1234') {
      localStorage.setItem('isAuthenticated', 'true');
      // Redirecionando para a página Home após login
      navigate('/home'); // Verifique a rota para o caminho correto (minúsculo)
    } else {
      alert('Usuário ou senha inválidos!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
