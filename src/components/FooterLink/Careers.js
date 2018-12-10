import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import { Button, Image } from 'semantic-ui-react';

class Careers extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Menu />
        <div className="careers-container">
          <Image
            fluid
            className="career-img"
            src="http://i67.tinypic.com/2wgbrxx.png"
            alt="Careers thumbnail"
          />
          <div className="career-action">
            <Button className="apply-button">Apply Now</Button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Careers;
