import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import { Button } from 'semantic-ui-react';

class Careers extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div>
        <Menu />
        <div className="careers-container">

        <img
          className="career-img"
          src="http://i67.tinypic.com/2wgbrxx.png"
          alt="Careers thumbnail"
        />
        </div>

        <Footer />
      </div>
    )
  }
}


export default Careers;
