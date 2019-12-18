import React, { useContext, useState, } from 'react';
import { Header, Form, Segment,  } from 'semantic-ui-react';
import { AuthContext, } from '../providers/AuthProvider';

const Register = (props) => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === passwordConfirmation) {
      auth.handleRegister({ email, password, passwordConfirmation, }, props.history)
    } else {
      alert("Passwords Do Not Match!")
    }
  };

  return (
    <Segment>
        <Header as="h1">Register</Header>
        <Form onSubmit={handleSubmit}>
          <Form.Input 
            autoFocus
            label="Email"
            name="email"
            onChange={(e, { value }) => setEmail(value)}
            placeholder="Email"
            required
            value={email}
          />
          <Form.Input 
            label="Password"
            name="password"
            onChange={(e, { value }) => setPassword(value)}
            placeholder="Password"
            required
            type="password"
            value={password}
          />
          <Form.Input 
            label="Password Confirmation"
            name="passwordConfirmation"
            onChange={(e, { value }) => setPasswordConfirmation(value)}
            placeholder="Confirm Password"
            required
            type="password"
            value={passwordConfirmation}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
    </Segment>
  );
};


export default Register;