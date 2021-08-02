/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'src/containers/Header/Navbar/Button';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = ({
  isLogged,
  nickname,

  changeConnexionFormToConnexion,
  changeConnexionFormToRegister,
  handleLogout,
}) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function goRegisterAndClose() {
    setClick(false);
    changeConnexionFormToRegister();
  }

  function goConnexionAndClose() {
    setClick(false);
    changeConnexionFormToConnexion();
  }

  return (

    <nav className="navbar">
      {isLogged
        && (
        <>
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            <i className="bi bi-person-circle" /> Bonjour {nickname}
          </Link>

          <div className="navbar__icon" onClick={handleClick}>
            <i className={click ? 'bi bi-x' : 'bi bi-list'} />
          </div>

          <ul className={click ? 'navbar__menu active' : 'navbar__menu'}>
            <li className="navbar__item">
              <Link to="/profil" className="navbar__links" onClick={closeMobileMenu}>
                Profil
              </Link>
            </li>

            {/* <li className="navbar__item">
              <Link
                to="/notifications"
                className="navbar__links"
                onClick={closeMobileMenu}
              >
                Notification
              </Link>
            </li> 
            <li className="navbar__item">
              <Link
                to="/tags"
                className="navbar__links"
                onClick={closeMobileMenu}
              >
                Mes "J'aime"
              </Link>
            </li>*/}
            <li>
              <Link
                to="/"
                className="navbar__links-mobile"
                onClick={closeMobileMenu}
              >
                Déconnexion
              </Link>
            </li>
          </ul>
        </>
        )}
      {!isLogged
        && (
        <>
          <div className="navbar__icon" onClick={handleClick}>
            <i className={click ? 'bi bi-x' : 'bi bi-list'} />
          </div>
          <ul className={click ? 'navbar__menu active' : 'navbar__menu'}>
            <li>
              <Link
                to="/connexion"
                className="navbar__links-mobile"
                onClick={() => goRegisterAndClose()}
              >
                S'enregistrer
              </Link>
            </li>
            <li>
              <Link
                to="/connexion"
                className="navbar__links-mobile"
                onClick={() => goConnexionAndClose()}
              >
                Se connecter
              </Link>
            </li>
          </ul>
        </>
        )}
      <Button isLogged={isLogged} />
    </nav>
  );
};

Navbar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  changeConnexionFormToConnexion: PropTypes.func.isRequired,
  changeConnexionFormToRegister: PropTypes.func.isRequired,
};

export default Navbar;
