import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const newspaperIcon = <FontAwesomeIcon icon={faNewspaper} />
    const { activeItem } = this.state
    return (

      <Menu inverted size='massive'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
        <Link to='/'>Home</Link>
        </Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}>
          <Link to='/about'>About</Link>
          </Menu.Item>
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}>
          <Link to='/contact'>Contact</Link>
        </Menu.Item>
        <Menu.Header as='h1' color='blue' className='main-header'>
            <span className="newspaper-icon">{newspaperIcon}</span>
            News Search
        </Menu.Header>

        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' size="large" placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            position='right'
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>

    )
  }
}
