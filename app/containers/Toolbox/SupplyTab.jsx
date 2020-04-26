import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Fab from '@material-ui/core/Fab';
// import Button from '@mater'
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

class SupplyTab extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            expandedOverview: true,
            openAddSupplyDialog: false,
            shouldCloseDialog: true
        };
    }

   componentDidMount() {
        console.log( "SupplyTab component mounted" );
    }

    handleAddUser( event ) {
        console.log() 
    }

    handleClose( event ) {
        console.log( "Clossing supply dialog" )
        this.setState({ openAddSupplyDialog: false })
    }

    handleAddUSupply( event ) {
        this.setState({ openAddSupplyDialog: true })
    }

    render() {
        //console.log("Properties for SupplyTab", this.props)
        return ( 
         <div role='tabpanel' hidden={this.props.value !== this.props.index} id={`app-tab-${this.props.index}`}>
            { this.props.value === this.props.index && 
                <Card >
                    <div >
                        <CardContent >
                        <Typography component="h6" variant="h6">
                            Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Mac Miller
                        </Typography>
                        </CardContent>
                        <div className="controls">
                            <IconButton > <LocationOnIcon /> </IconButton>
                        </div>
                     </div>
                    <CardMedia
                        image="/static/images/cards/live-from-space.jpg"
                        title="Live from space album cover" />
                </Card>
            }
             <Fab id="add-supply-button" onClick={this.handleAddUSupply.bind(this)} aria-label='add_user' color='secondary'>
                <AddIcon />
            </Fab>
            <Dialog onClose={this.handleClose.bind(this)} open={this.state.openAddSupplyDialog}>
                <MuiDialogTitle disableTypography >
                  <Typography variant="h6">
                    Add Supply
                  </Typography>
                    {
                        this.state.openAddSupplyDialog ? 
                        (
                            <IconButton onClick={this.handleClose.bind(this)}>
                                <CloseIcon />
                            </IconButton>
                        ) 
                        : null
                    }
                </MuiDialogTitle>
                <MuiDialogContent dividers>
                  <Typography gutterBottom>
                    stuff
                  </Typography>
                </MuiDialogContent>
                <MuiDialogActions>
                  <IconButton autoFocus onClick={this.handleClose.bind(this)} color="success">
                    Done
                  </IconButton>
                </MuiDialogActions>
              </Dialog>`
        </div>
        )
    }
}

SupplyTab.propTypes = {

}

export default SupplyTab;
