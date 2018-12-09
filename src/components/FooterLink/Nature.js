import React from 'react';
import Menu from '../Menu';
import StoriesList from '../StoriesList';
const Nature = () => (
  <div style={{ textAlign: 'center' }}>
    <Menu />
    <StoriesList title="Nature News" queryText="nature" />
  </div>
);

export default Nature;
