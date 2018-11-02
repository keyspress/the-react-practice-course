import React from 'react';

import UserLayout from '../../../hoc/user';
import ManageBrands from './manage_brands';
import ManageWoods from './manage_woods';

export default function ManageCategories() {
  return (
    <UserLayout>
      <ManageBrands />
      <ManageWoods />
    </UserLayout>
  );
}
