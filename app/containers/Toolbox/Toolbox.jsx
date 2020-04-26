import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import HelpIcon from '@material-ui/icons/Help';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import StatefarmIcon from './StatefarmIcon.jsx';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';


class Toolbox extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            activeTab: 0,
        };
    }

    handleChange( event, newValue ) {

    }

    handleMenu( event ) {
        setAnchorEl(event.currentTarget);
    };

   componentDidMount() {
        console.log( "Toolbar component mounted" );

        var mySVG = document.getElementById('state-farm-icon');
        mySVG.setAttribute("viewBox", "170 0 25 30");
    }

    render() {
        return ( 
            <div id="toolbox">
                <AppBar position="relative" id="appbar">
                    <Toolbar id="toolbar">
                        <StatefarmIcon id="state-farm-icon" />
                        <IconButton
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit" >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                    <Tabs value=""
                        onChange={this.handleChange}
                        centered >
                    <Tab label="Neighborhood" value="0" icon={ <HomeWorkIcon />} />
                    <Tab label="Supplies"     value="1" icon={ <ListAltIcon />}/>
                    <Tab label="Help Others"  value="2" icon={ <LocalAtmIcon />}/>
                  </Tabs>
                </AppBar>
            </div>
        )
    }
}

Toolbox.propTypes = {
    children: PropTypes.instanceOf(Array)
}

export default Toolbox;