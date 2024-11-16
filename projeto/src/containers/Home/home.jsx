import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
    localStorage.removeItem('isloggedIn');
    navigate('/');
    };

    return(
        <div>
            <h1>hello, bem vindo ao meu site!</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}

export default Home