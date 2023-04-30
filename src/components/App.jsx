import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { getContacts, getFilter } from '../redux/selector';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts, setFiltered } from '../redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const addNewContact = (data) => {
    if (contacts.find((item) => item.name === data.name)) {
      return alert(`${data.name} is already in contacts`);
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };

    dispatch(addContacts(newContact));
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const updateFilter = (event) => {
    const newFilter = event.target.value.toLowerCase();
    dispatch(setFiltered(newFilter));
  };

  return (
    <div>
      <ContactForm addContact={addNewContact} />

      <Filter filter={filter} updateFilter={updateFilter} />

      <ContactList contacts={filteredContacts()} />
    </div>
  );
};
