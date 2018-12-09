import React from 'react';
import Menu from '../Menu';
import StoriesList from '../StoriesList';
const Sports = () => (
  <div style={{ textAlign: 'center' }}>
    <Menu />
    <StoriesList title="Sports News" queryText="sports" />
  </div>
);

export default Sports;
