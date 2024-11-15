import {} from "react"
import {useHistory} from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const handleLogout = () => {
    localStorage.removeItem('isloggedIn');
    history.push('/');
    };

    if(!localStorage.getItem('isLoggedIn')) {
        history.push('/');
        }

    return(
        <div>
            <h1>hello, bem vindo ao meu site!</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}

export default Home