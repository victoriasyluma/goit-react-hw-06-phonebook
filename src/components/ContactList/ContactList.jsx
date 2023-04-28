import styles from './ContactList.module.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlice';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contact_list}>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {`${contact.name}: ${contact.number}`}
            <button
              onClick={() => {
                dispatch(deleteContacts(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
