import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import CloseIcon from '@material-ui/icons/Close';

export default class HelpOthersTab extends React.Component {
    constructor(props){
        super(props);
        this.mapInstance = null;

        this.state = {
            openAddItemDialog: false,
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

            this.mapInstance.updateLocationMarker( {
                locationString: {lat: position.coords.latitude,lng:position.coords.longitude }
            })
        });
    }

    handleSubmit(event) {
        this.setState({ openAddItemDialog: false })
        alert('Thank you for helping others in the community!');
        event.preventDefault();
    }

    setMapInstance( inst ) {
        this.mapInstance = inst;
    }

    render() {
        console.log("Properties for HelpOthersTab", this.props)
        const { showForm } = this.state;
        return ( 
            <div role='tabpanel' hidden={this.props.value !== this.props.index} id={`app-tab-${this.props.index}`}>
                { 
                    this.props.value === this.props.index && 
                    <div>
                        <Fab id="add-item-button" onClick={() => this.setState({ openAddItemDialog: true })} aria-label='add_item' color='secondary'>
                        <AddIcon />
                        </Fab>
                        <Dialog onClose={() => this.setState({ openAddItemDialog: false })} open={this.state.openAddItemDialog}>
                            <MuiDialogTitle disableTypography >
                                <Typography variant="h6">
                                    <Grid>
                                        {
                                            this.state.openAddItemDialog ? (
                                                <IconButton onClick={() => this.setState({ openAddItemDialog: false })} alignItems="flex-start" justify="flex-end" direct="row"><CloseIcon /></IconButton>
                                            ) 
                                            : null
                                        }
                                    </Grid>
                                    <Grid container direction="column" alignItems="center">
                                        <Grid item  xs={6}>
                                            Add Item
                                        </Grid>
                                    </Grid>
                                </Typography>
                                <Typography variant="subtitle2">
                                    Let others know what you have to help the community!
                                </Typography>
                            </MuiDialogTitle>
                            <MuiDialogContent dividers>
                            <form>
                            <Typography gutterBottom>
                                <Grid
                                    container
                                    direction="column"
                                    alignItems="center" >
                                    <Grid item  xs={6}>
                                        <FormControl fullWidth variant="outlined">
                                            <Box >
                                                <InputLabel  htmlFor="outlined-adornment-amount">Item Name</InputLabel>
                                                <OutlinedInput
                                                    onChange={this.handleItemNameChange}
                                                    startAdornment={<InputAdornment position="start"> </InputAdornment>}
                                                    labelWidth={75} />
                                            </Box>
                                        </FormControl>
                                    </Grid>
                                    <br/>
                                    <Grid item  xs={6}>
                                        <FormControl fullWidth variant="outlined">
                                            <Box >
                                                <InputLabel  htmlFor="outlined-adornment-amount">Your Name</InputLabel>
                                                <OutlinedInput
                                                    onChange={this.handleCoordsChange}
                                                    startAdornment={<InputAdornment position="start"> </InputAdornment>}
                                                    labelWidth={75} />
                                            </Box>
                                        </FormControl>
                                    </Grid>
                                    <br/>
                                    <Grid item  xs={6}>
                                        <FormControl fullWidth variant="outlined">
                                            <Box >
                                                <InputLabel  htmlFor="outlined-adornment-amount">Your Location</InputLabel>
                                                <OutlinedInput
                                                    onChange={this.handleCoordsChange}
                                                    startAdornment={<InputAdornment position="start"> </InputAdornment>}
                                                    labelWidth={100} />
                                            </Box>
                                        </FormControl>
                                    </Grid>
                                    <br/>
                                    <Grid item  xs={6}>
                                        <FormControl fullWidth variant="outlined">
                                            <Box >
                                                <InputLabel  htmlFor="outlined-adornment-amount">How many you have</InputLabel>
                                                <OutlinedInput
                                                    onChange={this.handleSupplyCountChange}
                                                    startAdornment={<InputAdornment position="start"> </InputAdornment>}
                                                    labelWidth={140} />
                                            </Box>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Typography>
                            </form>
                            </MuiDialogContent>
                            <MuiDialogActions>
                            <IconButton autoFocus onClick={(event) => { this.handleSubmit(event); } } color="primary">
                                Submit
                            </IconButton>
                            </MuiDialogActions>
                        </Dialog>
                    </div>
                }
            </div>
        )
    }
}