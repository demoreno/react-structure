import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import { Link } from 'react-router-dom';

const styles = {
    title: {
        cursor: 'pointer',
    },
};

class Login extends React.Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login" />
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
export default class Header extends React.Component{

    constructor(props){
        super(props);

        this.navigationMenu = this.navigationMenu.bind(this);

        this.state = {
            handleDrawer: false,
            logged: true
        };
    }

    navigationMenu(){
        this.setState({handleDrawer: !this.state.handleDrawer });
    }

    render(){
        return (
            <div>
                <AppBar
                    title={<span style={styles.title}>Title</span>}
                    iconElementLeft={<IconButton onClick={this.navigationMenu}><NavigationMenu/></IconButton>}
                    iconElementRight={this.state.logged ? <Logged /> : <Login />}
                />

                <Drawer open={this.state.handleDrawer}>
                    <AppBar
                        title="App"
                        iconElementLeft={<IconButton onClick={this.navigationMenu}><NavigationClose/></IconButton>}
                    />
                    <MenuItem onClick={this.navigationMenu}><Link to='/about'>About</Link></MenuItem>
                    <MenuItem onClick={this.navigationMenu}><Link to='/contact'>Contact</Link></MenuItem>
                </Drawer>
            </div>
        );
    }
}