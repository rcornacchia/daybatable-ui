import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';

class UserDropDown extends Component {
  state = {
    openMenu: false
  };

  handleOpenMenu = () => {
    this.setState({
      openMenu: true,
    });
  }

  logout = () => {
    this.props.logout();
  }

  close = () => {
    this.setState({
      openMenu: false
    });
  }

  render() {
    const { username, logout } = this.props;

    return (
      <div className='username-dropdown right-link'>
        <IconMenu
          iconButtonElement={<FlatButton onTouchTap={this.handleOpenMenu} label={username} />}
          open={this.state.openMenu}
        >
          <MenuItem value="1" primaryText={username} onClick={this.close} />
          <MenuItem value="2" primaryText="Logout" onClick={this.logout} />
        </IconMenu>
      </div>
    )
  }
}

const styles = {
  customWidth: {
    border: 0
  }
}

export default UserDropDown;