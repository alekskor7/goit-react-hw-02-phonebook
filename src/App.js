import React, { Component } from "react";
import uuid from "react-uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      {
        id: "c7a273d-8bfr-66gr-wef2-4f4d57ea2d0",
        name: "Rosie Simpson",
        number: "459-12-56",
      },
      {
        id: "anctrjd-8bfr-66gr-wef2-4f4d57ea2d0",
        name: "Hermione Kline",
        number: "443-89-12",
      },
      {
        id: "dkt846a-8bfr-66gr-wef2-4f4d57ea2d0",
        name: "Eden Clements",
        number: "645-17-79",
      },
      {
        id: "hr7y3td-8bfr-66gr-wef2-4f4d57ea2d0",
        name: "Annie Copeland",
        number: "227-91-26",
      },
    ],
    filter: "",
  };
  addContact = (data) => {
    const { name, number } = data;
    if (this.isContactExist(name)) {
      const id = uuid();
      this.setState(({ contacts }) => ({
        contacts: [{ id: id, name: name, number: number }, ...contacts],
      }));
    }
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  isContactExist = (contactName) => {
    const { contacts } = this.state;
    let contactExist = true;

    contacts.forEach(({ name }) => {
      if (name.toLowerCase() === contactName.toLowerCase()) {
        alert(`${contactName} is already in contacts`);
        contactExist = false;
      }
    });

    return contactExist;
  };
  filterHandler = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;
    if (filter !== "") {
      return contacts.filter(({ name }) => name.includes(filter));
    } else {
      return contacts;
    }
  };
  render() {
    const contacts = this.filterContacts();
    const filter = this.state.filter;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilter={this.filterHandler} />
        <ContactList contacts={contacts} onDelete={this.deleteContact} />
     </>
    );
  }
}

export default App;