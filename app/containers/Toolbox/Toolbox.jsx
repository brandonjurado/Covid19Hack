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
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import StatefarmIcon from './StatefarmIcon.jsx';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import NeighborhoodTab from './NeighborhoodTab.jsx';
import SupplyTab from './SupplyTab.jsx';


function applyTabProps(index) {
    return {
        id: `app-tab-${index}`,
    };
}

class Toolbox extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: 0,
            currentSearchItem: "Dallas",
        };
    }

    handleChange( event, newValue ) {
        this.setState( {
            value: newValue
        } )
        console.log( `switching to ${newValue}` )
    }

    handleMenu( event ) {
        setAnchorEl(event.currentTarget);
    };

   componentDidMount() {
        console.log( "Toolbar component mounted" );

        var mySVG = document.getElementById('state-farm-icon');

        mySVG.setAttribute("viewBox", "170 0 25 30");
    }

    handleSearchItemChange( event ){
        this.setState( {
            currentSearchItem: event.target.value
        } )
        console.log( `search item is ${event.target.value}` )
    }

    handleSearchClick( event ){
        console.log( `search item clicked` );
        console.log( "Case selection ", this.state.value )

        switch ( this.state.value )
        {
            case 0:{
                axios({
                  method: 'post',
                  url: `${this.props.end_point}` + '/county',
                  data: {
                    county: `${this.state.currentSearchItem}` ,
                  }
                });
            }
            break;
            case 1:{

            }
            break;
            case 2:{

            }
            break;
            default: break;
        }
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
                    <FormControl fullWidth variant="outlined">
                        <Box display="flex">
                            <InputLabel  htmlFor="outlined-adornment-amount">Location</InputLabel>
                            <OutlinedInput
                                id="searchbox"
                                onChange={this.handleSearchItemChange.bind(this)}
                                startAdornment={<InputAdornment position="start"> </InputAdornment>}
                                labelWidth={60} />
                            <IconButton aria-label="search" onClick={this.handleSearchClick.bind(this)}><SearchIcon /></IconButton>
                        </Box>
                    </FormControl>
                    <Tabs value={this.state.value} onChange={this.handleChange.bind(this)} >
                        <Tab label="Neighborhood" {...applyTabProps(0)} icon={ <HomeWorkIcon />} />
                        <Tab label="Supplies"     {...applyTabProps(1)}  icon={ <ListAltIcon />}/>
                        <Tab label="Help Others"  {...applyTabProps(2)}  icon={ <LocalAtmIcon />}/>
                    </Tabs>
                </AppBar>
                <NeighborhoodTab value={this.state.value} index={0} />
                <SupplyTab value={this.state.value} index={1} />
            </div>
        )
    }
}

Toolbox.propTypes = {
    children: PropTypes.instanceOf(Array)
}

export default Toolbox;