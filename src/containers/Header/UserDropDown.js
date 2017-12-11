import React, { Component } from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Popover from 'material-ui/Popover';

class UserDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  logout = () => this.props.logout();

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { username, logout } = this.props;

    return (
      <div className='username-dropdown right-link'>
        <Button onClick={this.handleTouchTap}>{username}</Button>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          onRequestClose={this.handleRequestClose}
        >
          <Button onClick={this.logout}>Logout</Button>
        </Popover>
      </div>
    );
  }
}

export default UserDropDown;