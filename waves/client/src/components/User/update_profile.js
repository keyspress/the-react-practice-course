import React from 'react';

import UserLayout from '../../hoc/user';
import UpdatePersonalNfo from './update_personal_nfo';

export default function UpdateProfile() {
  return (
    <UserLayout>
      <h1>Profile</h1>
      <UpdatePersonalNfo />
    </UserLayout>
  );
}
