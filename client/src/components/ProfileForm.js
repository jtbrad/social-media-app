import React, { useState, } from 'react';
import { Form, Header, Segment, } from 'semantic-ui-react';

const ProfileForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  return (
    <Segment>
      <Header as="h1">Create Profile</Header>
      <Form>
        <Form.Input 
          autofocus
          label="First Name"
          name="firstName"
          onChange={ (e, { value, }) => setFirstName(value)}
          placeholder="First Name"
          required
          value={firstName}
        />
        <Form.Input 
          label="Last Name"
          name="lastName"
          onChange={ (e, { value, }) => setLastName(value)}
          placeholder="Last Name"
          required
          value={lastName}
        />
      </Form>
    </Segment>
  );
};


export default ProfileForm;