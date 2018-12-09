import React from 'react';
import Menu from '../Menu';
import StoriesList from '../StoriesList';
const Local = () => (
  <div style={{ textAlign: 'center' }}>
    <Menu />
    <StoriesList title="Local News" queryText="SanDiego" />
  </div>
);

export default Local;
