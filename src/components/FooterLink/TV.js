import React from 'react';
import Menu from '../Menu';
import StoriesList from '../StoriesList';
const TV = () => (
  <div style={{ textAlign: 'center' }}>
    <Menu />
    <StoriesList title="TV News" queryText="television" />
  </div>
);

export default TV;
