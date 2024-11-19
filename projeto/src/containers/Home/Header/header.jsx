import { useNavigate } from 'react-router-dom';

import './header.css'

const Header = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isloggedIn');
        navigate('/');
    };


    return (
        <>
            <div className="box_header">
                <div>
                    <form>
                        <input
                            placeholder='buscar filme'
                            type='text'
                        />
                    </form>
                </div>

                <button onClick={handleLogout}>Sair</button>

            </div>
        </>
    )
}

export default Header