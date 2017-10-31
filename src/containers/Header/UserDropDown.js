import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';

class UserDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
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
        <FlatButton
          onClick={this.handleTouchTap}
          label={username}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Logout" onClick={this.logout}/>
          </Menu>
        </Popover>
      </div>
    );
  }
}
//   state = {
//     openMenu: false
//   };

//   handleOpenMenu = () => {
//     this.setState({
//       openMenu: true,
//     });
//   }

//   logout = () => {
//     this.props.logout();
//   }

//   close = () => {
//     this.setState({
//       openMenu: false
//     });
//   }

//   render() {
//     const { username, logout } = this.props;

//     return (
//       <div className='username-dropdown right-link'>
//         <Menu
//           iconButtonElement={<FlatButton onTouchTap={this.handleOpenMenu} label={username} />}
//           open={this.state.openMenu}
//         >
//           <MenuItem value="1" primaryText={username} onClick={this.close} />
//           <MenuItem value="2" primaryText="Logout" onClick={this.logout} />
//         </Menu>
//       </div>
//     )
//   }
// }

export default UserDropDown;