import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Api from './Api';

class MainMenu extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  onHomeClick = () => {
    this.handleItemClick();
  }
  render() {
    const newspaperIcon = <FontAwesomeIcon icon={faNewspaper} />;
    const { activeItem } = this.state;
    return (
      <div className="menu-container">
        <Menu fixed="top" inverted stackable size="massive">
          <Menu.Item
            className="first-menu-item"
            as={Link}
            to="/"
            name="home"
            active={activeItem === 'home'}
            onClick={this.onHomeClick}
          />

          <Menu.Item
            as={Link}
            to="/about"
            name="about"
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link}
            to="/contact"
            name="contact"
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          />

          <Menu.Header as="h1" color="blue" fixed="left" className="main-header">
            <span className="newspaper-icon">{newspaperIcon}</span>
            News Search
          </Menu.Header>

          <Menu.Menu >
            <Menu.Item>
              <form

                onSubmit={e =>
                  this.props.onInputSubmit(e, this.props.inputText)
                }
              >
                <Input
                  onClick={e =>
                    this.props.onInputSubmit(e, this.props.inputText)
                  }
                  className="search-input"
                  value={this.props.inputText}
                  onChange={this.props.onInputChange}
                  icon="search"
                  size="large"
                  placeholder="Search..."
                />
              </form>
            </Menu.Item>
            <Menu.Item
              position="right"
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    storiesList: state.storiesList,
    inputText: state.inputText,
    selectedStory: state.selectedStory,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: e => {
      const action = { type: 'ON_INPUT_CHANGE', text: e.target.value };
      dispatch(action);
    },
    onInputSubmit: (e, query) => {
      e.preventDefault();
      Api.getStories(dispatch, query);
    },
    onInitialLoad: () => {
      Api.testing(dispatch);
    },
    onStorySelect: (e, story) => {
      console.log(e);
      const action = { type: 'ON_STORY_SELECT', selectedStory: e };
      dispatch(action);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);
