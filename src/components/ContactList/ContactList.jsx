import s from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';
import { useSelector } from 'react-redux';
import Notification from '../Notification/Notification.jsx';
import {
  selectContacts,
  selectFilteredContacts,
} from '../../redux/contacts/selectors.js';

const ContactList = () => {
  const contactList = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (!contactList?.length) return <Notification />;
  return (
    <div className={s.contactList}>
      {filteredContacts.map(contact => {
        return <Contact key={contact.id} {...contact} />;
      })}
    </div>
  );
};
export default ContactList;