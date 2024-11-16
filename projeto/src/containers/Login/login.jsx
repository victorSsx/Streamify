import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

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
        
          <input
            placeholder='Nome do Usuário'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        
        <br />
      
        
          <input
            placeholder='Senha'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
