import clsx from 'clsx';
import s from './Contact.module.css';


// import { normalizePhoneNumber } from './Contact.js';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
    toast.success('The contact has successfully deleted!', {
      duration: 4000,
    });
  };
  return (
    <div className={s.СontactItem} tabIndex="1">
      <div className={s.contactInfo}>
        <div className={clsx(s.infoItem, s.contactNameItem)}>
          <span className={s.contactName}>{name}</span>
        </div>
        <div className={clsx(s.infoItem, s.contactNumberItem)}>
          <span className={s.contactNumber}>
            {number}
          </span>
        </div>
      </div>
      <div className={s.contactBtnItem}>
        <button className={s.btn} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Contact;