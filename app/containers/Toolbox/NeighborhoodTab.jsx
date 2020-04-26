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
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import axios from 'axios';
import InfoIcon from '@material-ui/icons/Info';

class NeighborhoodTab extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            expandedOverview: true,
            overview: {
                cases: 0,
                deaths: 0,
                recovered: 0
            },
            num_since_first_oc: 10,
            num_since_sec_oc: 9
        };
        this.mapInstance = null;

    }
    setMapInstance( inst ) {
        this.mapInstance = inst;
    }

   componentDidMount() {
        console.log( "NeighborhoodTab component mounted" );
    }

    handleFirstOccurrenceChange() {
        console.log( "NeighborhoodTab first oc change" );
        this.setState({ num_since_first_oc: event.target.value })
    }

    handleSecondOcurrenceChange() {
        console.log( "NeighborhoodTab second os change" );
        this.setState({ num_since_sec_oc: event.target.value })
    }

    handleSimClick() {
        console.log( "NeighborhoodTab running simulation" );

        if ( this.mapInstance === null )
        {
            alert("Please select a location first");
            return;
        }

        this.mapInstance.getCountyAndState( this.props.currentLocation ).then( ( mapResponse ) => 
        {
            console.log(" get county and state of ", this.props.currentLocation )
            console.log( "Maps api response", mapResponse )
            
            var county = "";
            var state  = "";

            for ( var addr_comp of mapResponse.data.results[0]["address_components"] )
            {
                if ( addr_comp["types"][0] === "administrative_area_level_2") {
                    county = addr_comp["long_name"]
                    console.log( "Found county", county )
                }

                if ( addr_comp["types"][0] === "administrative_area_level_1" ) {
                    state = addr_comp["long_name"]
                    console.log( "Found state", state )
                }
            }
            

            const axiosConfig = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            axios({
              method: 'get',
              url: ` ${county} ${state} ${this.state.num_since_first_oc} ${this.state.num_since_sec_oc}`, 
              axiosConfig
            }).then( (response) => {
                console.log( "Got values ", response )

                // set background data
                document.getElementById("sim-graph").src = "data:image/png;base64," + response.data
                document.getElementById("sim-graph").style.width = "500px"
                document.getElementById("sim-graph").style.height = "350px"

            }, (error) => {
                console.log( response )
            });
        } )
    }

    render() {
        //console.log("Properties for NeighborhoodTab", this.props)
        return ( 
            <div role='tabpanel' hidden={this.props.value !== this.props.index} id={`app-tab-${this.props.index}`}>
                { this.props.value === this.props.index && 
                    <form id="form-neighborhood"noValidate autoComplete="off" >
                        
                        <ExpansionPanel id="expansion-panel" expanded={this.state.expandedOverview}>
                            <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header" >
                              <Typography >Overview</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container spacing={3} >
                                    <Grid item  xs={4}>
                                         <Paper elevation={3} >
                                            <Typography align="center"  variant="h5">
                                                {this.props.cases}
                                            </Typography>
                                            <Typography align="center"  variant="body1">Cases</Typography>
                                         </Paper>
                                    </Grid>
                                    <Grid item  xs={4}>
                                         <Paper elevation={3} >
                                            <Typography align="center"  variant="h5">
                                                {this.props.deaths}
                                            </Typography>
                                            <Typography align="center"  variant="body1">Deaths</Typography>
                                         </Paper>
                                    </Grid>
                                    <Grid item  xs={4}>
                                         <Paper elevation={3} >
                                            <Typography align="center" variant="h5">
                                                {this.props.recovered}
                                            </Typography>
                                            <Typography align="center"  variant="body1">Recovered</Typography>
                                         </Paper>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <div id="alert-info">
                            <Typography><InfoIcon/> The following is based on information from the location's county</Typography>
                        </div>
                        <ExpansionPanel id="expansion-panel" expanded={true}>
                            <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header" >
                              <Typography >Reudction Simulation</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid
                                    container
                                    direction="column"
                                    alignItems="center" >
                                    <Grid item  xs={6}>
                                         <FormControl fullWidth variant="outlined">
                                            <Box >
                                                <InputLabel  htmlFor="outlined-adornment-amount"># Days since 1st ocurrence</InputLabel>
                                                <OutlinedInput
                                                    value={this.state.num_since_first_oc}
                                                    onChange={this.handleFirstOccurrenceChange.bind(this)}
                                                    startAdornment={<InputAdornment position="start"> </InputAdornment>}
                                                    labelWidth={60} />
                                            </Box>
                                        </FormControl>
                                    </Grid>
                                    <Grid item  xs={6}>
                                        <FormControl fullWidth variant="outlined">
                                            <Box >
                                                <InputLabel  htmlFor="outlined-adornment-amount"># Days since intervention</InputLabel>
                                                <OutlinedInput
                                                    value={this.state.num_since_sec_oc}
                                                    onChange={this.handleSecondOcurrenceChange.bind(this)}
                                                    startAdornment={<InputAdornment position="start"> </InputAdornment>}
                                                    labelWidth={60} />
                                            </Box>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <IconButton aria-label="search" onClick={this.handleSimClick.bind(this)}><SearchIcon /></IconButton>
                            </ExpansionPanelDetails>
                            <div id="sim-graph"></div>
                        </ExpansionPanel>
                    </form>
                }
            </div>
        )
    }
}

NeighborhoodTab.propTypes = {

}

export default NeighborhoodTab;