import React, { useContext, } from 'react';
import { Link, } from 'react-router-dom';
import { Button, Header, } from 'semantic-ui-react';
import { AuthContext, } from '../providers/AuthProvider';

const Profile = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <Header as="h1">Profile</Header>
      <Button as={Link} to={`/${auth.user.id}/profile/new`}>Create Profile</Button>
    </>
  );
};


export default Profile;