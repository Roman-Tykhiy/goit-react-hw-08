import s from './Notification.module.css';

const Notification = () => {
  return (
    <div className={s.notification}>
      <p>В тебе ще немає контактів</p>
    </div>
  );
};

export default Notification;