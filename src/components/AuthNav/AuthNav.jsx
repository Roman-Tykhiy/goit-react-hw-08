import { NavLink } from 'react-router-dom';
import s from './Auth.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AuthNav = () => {
  return (
    <div className={s.container}>
      <NavLink className={buildLinkClass} to="/register">
        Зареєструватись
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Увійти
      </NavLink>
    </div>
  );
};
export default AuthNav;
