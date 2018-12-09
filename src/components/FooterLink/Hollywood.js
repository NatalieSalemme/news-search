import React from 'react';
import Menu from '../Menu';
import StoriesList from '../StoriesList';
const Hollywood = () => (
  <div style={{ textAlign: 'center' }}>
    <Menu />
    <StoriesList title="Hollywood News" queryText="hollywood" />
  </div>
);

export default Hollywood;
