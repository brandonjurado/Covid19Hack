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
import axios from 'axios';
import PhoneIcon from '@material-ui/icons/Phone';
import ShareIcon from '@material-ui/icons/Share';
import Popover from '@material-ui/core/Popover';

class SupplyTab extends React.Component {
    constructor(props){
        super(props);
        this.mapInstance = null;

        this.state = {
            expandedOverview: true,
            openAddSupplyDialog: false,
            shouldCloseDialog: true,
            items: []
        };
    }

   componentDidMount() {
        console.log( "SupplyTab component mounted" );
        
        var location = this.props.currentLocation.toLowerCase().replace(/ /g, "_");

        console.log( "Supply tab map instance ", this.mapInstance )

        for ( var i = 1; i < 7; i++) {
            axios( {
                method: 'get',
                url: `https://09d27ogng5.execute-api.us-east-1.amazonaws.com/dev/users/${location}_supply_${i}`,
            } )
            .then( ( response ) => 
                {
                    console.log( "Got EP", response );

                    var _items = response.data["name"].split(" ");

                    this.setState( prevState => ({
                          items: [...prevState.items, _items]
                    }));
                }, 
                (error) => { console.log( "Got EP ", error ); }  )
        }
    }

    setMapInstance( inst ) {
        this.mapInstance = inst;
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

    handleLocateSupply( index ) {
        console.log( "Locating supply ", index )
       var addr = this.state.items[ index ][4] ;

       addr = addr.substring( 0, addr.length - 5);
       addr = addr.replace( /_/g, " ")

       this.mapInstance.addLocationMarker( addr );
    }

    render() {
        //console.log("Properties for SupplyTab", this.props)
        return ( 
         <div role='tabpanel' hidden={this.props.value !== this.props.index} id={`app-tab-${this.props.index}`}>
            { 
                this.state.items.map( (item, i) =>
                {
                    return(
                        this.props.value === this.props.index && 
                        <Card key={i} className="card-root">
                            <div className="details">
                                <CardContent className="content">
                                    <Typography component="h6" variant="h6">
                                        {item[0].replace(/_/g, " ")}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {item[1].replace(/_/g, " ")}
                                    </Typography>
                                </CardContent>
                                <div className="controls">
                                    <IconButton id={item[4]} onClick={(e) => this.handleLocateSupply(i) } > 
                                        <LocationOnIcon /> 
                                    </IconButton>
                                    
                                    <IconButton > <PhoneIcon /> </IconButton>
                                    <IconButton > <ShareIcon /> </IconButton>
                                    <IconButton>#{item[2]}</IconButton>
                                </div>
                             </div>
                            <CardMedia className="cover"
                                elevation={3}
                                image={item[3]}
                                title="" />
                        </Card>
                    );
                } )
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
