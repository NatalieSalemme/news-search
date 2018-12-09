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
          <div id="pointer">
            <h3 className="banner-text">Employment Opportunities</h3>
          </div>
          <div className="career-action">
            <h1>{'Join Our Team'.toUpperCase()}</h1>
            <p>Be part of the News family and start your journalism career today!</p>
            <Button className="apply-button">Apply Now</Button>
          </div>
        <img
          className="career-img"
          src="https://images.unsplash.com/photo-1525857332689-4b3110c2d3f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=928&q=80"
          alt="Careers thumbnail"
        />


        <Footer />
      </div>
    )
  }
}


export default Careers;
