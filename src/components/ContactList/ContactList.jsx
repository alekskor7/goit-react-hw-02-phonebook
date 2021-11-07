import { Component } from "react";
import Contact from "./ContactListItem";
import PropTypes from "prop-types";
import Style from "./ContactList.module.css";

class ContactList extends Component {
  render() {
    const contacts = this.props.contacts;
    const deleteContact = this.props.onDelete;
    return (
      <ul className={Style.contactList}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={deleteContact}
          />
        ))}
      </ul>
    );
  }
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;