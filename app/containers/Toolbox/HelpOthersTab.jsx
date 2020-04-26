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
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/RemoveCircle'
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';

export default class HelpOthersTab extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showForm: false,
            expandedOverview: true,
            overview: {
                cases: 0,
                deaths: 0,
                recovered: 0
            }
        };
    }

   componentDidMount() {
        console.log( "HelpOthersTab component mounted" );
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    }

    showForm = () => {
        console.log( "Testing1" );
        return (
            <div>
                <form id="help-others-form">
                    <label>Item: </label>
                    <input type="text"></input>

                    <label>Name: </label>
                    <input type="text"></input>

                    <label>Phone: </label>
                    <input type="text"></input>

                    <label>Location: </label>
                    <input type="text"></input>

                    <input type="submit" value="Add"/>
                </form>
            </div>
        );
    }

    render() {
        //console.log("Properties for HelpOthersTab", this.props)
        const { showForm } = this.state;
        return ( 
            <div role='tabpanel' hidden={this.props.value !== this.props.index} id={`app-tab-${this.props.index}`}>
                { this.props.value === this.props.index && 
                    <div>
                    {!showForm && <IconButton aria-label="search" onClick={() => this.setState({showForm: true}) }><AddIcon /></IconButton>}
                    {showForm && <IconButton aria-label="search" onClick={() => this.setState({showForm: false}) }><RemoveIcon /></IconButton>}
                    {showForm && this.showForm()}
                    </div>
                }
            </div>
        )
    }
}