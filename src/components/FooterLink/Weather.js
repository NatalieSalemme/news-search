import React from 'react';
import Menu from '../Menu';
import StoriesList from '../StoriesList';
const Weather = () => (
  <div style={{ textAlign: 'center' }}>
    <Menu />
    <StoriesList title="Weather News" queryText="weather" />
  </div>
);

export default Weather;
