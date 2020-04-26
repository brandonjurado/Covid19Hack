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
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';

class NeighborhoodTab extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            expandedOverview: true,
            overview: {
                cases: 0,
                deaths: 0,
                recovered: 0
            }
        };
    }

   componentDidMount() {
        console.log( "NeighborhoodTab component mounted" );
    }

    // <Grid container spacing={2} >
    //                         <Grid item  xs={10}>
    //                             <TextField onChange={this.handleSearchItemChange.bind(this)} 
    //                                       placeholder="Search County, City or State" />
    //                         </Grid>
    //                         <Grid item  xs={2}>
    //                             <IconButton  >
    //                                 <SearchIcon />
    //                             </IconButton>
    //                         </Grid>
    //                     </Grid>
    //                     <Divider />

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
                    </form>
                }
            </div>
        )
    }
}

NeighborhoodTab.propTypes = {

}

export default NeighborhoodTab;