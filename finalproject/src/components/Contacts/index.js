import React from 'react';
import './index.css';

class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      contacts: []
    };
  }

  componentDidMount() {
    this.profileInfo();
    this.contactInfo();
  }

  contactInfo() {
    window.fetch('http://plato.mrl.ai:8080/contacts', {
      headers: { 
        API: 'larson' 
      }
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data.contacts });
      });
  }

  profileInfo() {
    window.fetch('http://plato.mrl.ai:8080/profile', {
      headers: { 
        API: 'larson' 
      }
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ profile: data });
      });
  }

  addContact = (event) => {
    event.preventDefault();
    fetch('http://plato.mrl.ai:8080/contacts/add', {
      method: 'POST',
      body: JSON.stringify({
        name: this.refs.name.value,
        number: this.refs.number.value
      }),
      headers: { 
        'Content-type': 'application/json',
        API: 'larson' 
      }
    })
      .then(res => { return res.json() })
      .then(() => {
        this.profileInfo();
        this.contactInfo();
      });
  }

  removeContact = (index) => {
    fetch('http://plato.mrl.ai:8080/contacts/remove', {
      method: 'POST',
      body: JSON.stringify({ position: index }),
      headers: { 
        'Content-type': 'application/json',
        API: 'larson' 
      }
    })
      .then(res => { return res.json() })
      .then(() => {
        this.profileInfo();
        this.contactInfo();
      });
  }

  render() {
    return (
      <div>
        <h1>Dalton's Contacts</h1>
          <fieldset>
            <h2>Profile</h2>
            <h3>Name:</h3>
            <p>{this.state.profile.name}</p>
            <h3>Contact Count:</h3>
            <p>{this.state.profile.count}</p>
          </fieldset>
          <fieldset>
            <h2>Add Contact</h2>
            <form onSubmit = {this.addContact}>
              <input ref = 'name' type = 'text' placeholder = 'Full Name' />
              <input ref = 'number' type = 'text' placeholder = 'Phone Number' />
              <button type = 'submit'>Add</button>
            </form>
          </fieldset>
          <fieldset>
            <h2>Contacts</h2>
            {this.state.contacts.map((value, index) => {
              return (
                <fieldset>
                  <h3>{value.name}</h3>
                  <p>{value.number} </p>
                  <button type = 'submit' onClick = {() => this.removeContact(index)} id = {index}>Remove</button>
                </fieldset>
              );
            })}
          </fieldset>
      </div>
    );
  }
}
export default Contacts;