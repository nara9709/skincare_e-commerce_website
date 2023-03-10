import React, { useState } from 'react';
import { MdOutlineModeEdit } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import User from '../User/User';
import Button from '@mui/material/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from '../CartStatus/CartStatus';
import useFade from '../../hooks/useFade';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Login from '../Login/Login';

export default function Header() {
  const { user, logout } = useAuthContext();
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setVisible, fadeProps] = useFade(false, 'fadeSide');
  const [openLogin, setOpenLogin] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    if (!isOpen) {
      setOpen(true);
      setVisible(true);
    } else {
      setOpen(false);
      setVisible(false);
    }
  };

  return (
    <nav className={styles.nav}>
      {openLogin && <Login setOpenLogin={setOpenLogin} />}
      <div className={styles.leftNav}>
        <div className={styles.burgerMenu}>
          <IconButton onClick={toggleMenu}>
            {!isOpen && <MenuIcon fontSize="large" />}
            {isOpen && <CloseIcon fontSize="large" />}
          </IconButton>
        </div>
        <Link to="">
          <p className={styles.textLogo}>SKI N BODY</p>
        </Link>
        <ul className={styles.menu}>
          <Link to="/products">
            <li>Products</li>
          </Link>
          {user && (
            <Link to="/carts">
              <li className={styles.icon_cart}>
                <CartStatus></CartStatus>
              </li>
            </Link>
          )}
          {user && user.isAdmin && (
            <Link to="products/new">
              <li className={styles.icon_edit}>
                <MdOutlineModeEdit />
              </li>
            </Link>
          )}
          {user && <User user={user} />}
        </ul>
      </div>

      <Link to="">
        {!user && (
          <span className={styles.loginButton}>
            <Button
              onClick={() => {
                setOpenLogin(true);
              }}
              size="medium"
              variant="outlined"
            >
              Login
            </Button>
          </span>
        )}
        {user && (
          <span className={styles.logoutButton}>
            <Button onClick={logout} size="medium" variant="outlined">
              Logout
            </Button>
          </span>
        )}
      </Link>
      {isOpen && isVisible && (
        <div {...fadeProps} className={styles.toggleMenu}>
          <ul>
            <li
              onClick={() => {
                navigate('/products', { state: { category: 'Serum' } });
                toggleMenu();
              }}
            >
              Serum
            </li>
            <li
              onClick={() => {
                navigate('/products', { state: { category: 'Cream' } });
                toggleMenu();
              }}
            >
              Cream
            </li>
            <li
              onClick={() => {
                navigate('/products', { state: { category: 'Soap' } });
                toggleMenu();
              }}
            >
              Soap
            </li>
            <li
              onClick={() => {
                navigate('/products', { state: { category: 'Body' } });
                toggleMenu();
              }}
            >
              Body
            </li>
            <li
              onClick={() => {
                navigate('/products', { state: { category: 'Lip' } });
                toggleMenu();
              }}
            >
              Lip
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
