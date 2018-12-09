import React from 'react';
import Menu from '../Menu';
import StoriesList from '../StoriesList';

const Tech = () => (
  <div style={{ textAlign: 'center' }}>
    <Menu />
    <StoriesList title="Tech News" queryText="tech" />
  </div>
);

export default Tech;
