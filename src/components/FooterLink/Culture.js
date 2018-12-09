import React from 'react';
import Menu from '../Menu';
import StoriesList from '../StoriesList';
const Culture = () => (
  <div style={{ textAlign: 'center' }}>
    <Menu />
    <StoriesList title="Culture News" queryText="culture" />
  </div>
);

export default Culture;
