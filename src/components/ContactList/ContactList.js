import css from './ContactList.module.css';
import { removeContact } from 'redux/contactSlice';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
export const ContactList = () => {
  const contacts = useSelector(state => state.contact.contacts);
  const filter = useSelector(state => state.contact.filter);
  const dispatch = useDispatch();
  return (
    <ul className={css.list}>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase().trim())
        )
        .map(({ name, id, number }) => {
          return (
            <li key={id} className={css.contactListItem}>
              <div className={css.contactInfo}>
                <span className={css.contactName}>{name}</span>
                <span className={css.contactNumber}>{number}</span>
              </div>
              <button
                type="button"
                onClick={event => {
                  dispatch(removeContact(event.target.id));
                }}
                id={id}
                className={css.deleteButton}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
ContactList.proptype = {
  contactNames: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
