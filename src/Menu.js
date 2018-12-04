
import React, { Component } from 'react'
import { Input, Menu, Header, Grid } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper} from '@fortawesome/free-solid-svg-icons';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const newspaperIcon = <FontAwesomeIcon icon={faNewspaper} />
    console.log(this.state);
    const { activeItem } = this.state
    return (

      <Menu inverted size='massive'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        />
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
