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

class SupplyTab extends React.Component {
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
        console.log( "SupplyTab component mounted" );
    }

    render() {
        console.log("Properties for SupplyTab", this.props)
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
        </div>
        )
    }
}

SupplyTab.propTypes = {

}

export default SupplyTab;
