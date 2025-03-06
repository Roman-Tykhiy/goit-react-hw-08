import { useDispatch } from 'react-redux';
import SearchBox from '../components/SerchBox/SerchBox';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';
import s from "./ContactsPage.module.css"
const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchContacts(abortController.signal));
    return () => abortController.abort();
  }, [dispatch]);
  return (
    <div className={s.container}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
export default ContactsPage;