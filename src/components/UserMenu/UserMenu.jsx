import { useDispatch, useSelector } from 'react-redux';
import s from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <p className={s.hello}>Вітаємо, {user.name}!</p>
      <button className={s.logout} onClick={() => dispatch(logOut())}>
        Вихід
      </button>
    </div>
  );
};
export default UserMenu;