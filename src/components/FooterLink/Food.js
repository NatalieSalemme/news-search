import React from 'react';
import Menu from '../Menu';
import StoriesList from '../StoriesList';
const Food = () => (
  <div style={{ textAlign: 'center' }}>
    <Menu />
    <StoriesList title="Food News" queryText="food" />
  </div>
);

export default Food;
