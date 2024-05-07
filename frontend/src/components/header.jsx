import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/argentbanklogo.webp';
import { logout } from '../redux/actions/auth.actions';
import '../sass/components/_header.scss';

function Header() {
    const firstname = useSelector((state) => state.auth.user.firstname); // Récupère le prénom de l'utilisateur
    const isConnected = useSelector((state) => state.auth.isConnected); // Récupère le statut d'authentification

    const dispatch = useDispatch(); // Initialise useDispatch pour déclencher des actions Redux
    const navigate = useNavigate(); // Initialise useNavigate pour la navigation

    // Fonction pour gérer la déconnexion de l'utilisateur
    const logoutHandler = () => {
        dispatch(logout()); // Déclenche l'action de déconnexion
        sessionStorage.clear(); // Efface les données de session
        localStorage.clear(); // Efface les données du stockage local
        navigate('/'); // Redirige vers la page d'accueil
    };



    return (
        <header>
            <h1 className='sr-only'>Argent Bank</h1> {/* Titre pour les lecteurs d'écran */}
            <nav>
                <Link to="/">
                    <img src={Logo} alt="Bank Logo" />
                </Link> 
                {isConnected ? ( 
                    <div className='connected'> {/* Condition : affichage différent selon l'état de connexion */}
                        <Link to='/Profile'>
                            <i className='fa-solid fa-2x fa-circle-user' />
                            <p>{firstname}</p>
                        </Link>
                        <Link to='/' onClick={logoutHandler}> {/* Lien pour déclencher la déconnexion */}
                            <i className='fa-solid fa-arrow-right-from-bracket' />
                            <p> Sign out </p>
                        </Link>
                    </div>
                ) : (
                    <div className='not-connected'>
                        <Link to='/login' >
                            <i className="fa-solid fa-circle-user"></i>
                            <p>Sign In</p>
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    ) 
}

export default Header