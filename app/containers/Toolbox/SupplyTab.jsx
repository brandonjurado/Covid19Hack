import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import axios from 'axios';
import PhoneIcon from '@material-ui/icons/Phone';
import ShareIcon from '@material-ui/icons/Share';


class SupplyTab extends React.Component {
    constructor(props){
        super(props);
        this.mapInstance = null;

        this.state = {
            expandedOverview: true,
            items: [],
            lastInsertedItem : {
                name: "",
                amount: 0,
                coords: []
            }
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

    handleLocateSupply( index ) {
        console.log( "Locating supply ", index )
       var addr = this.state.items[ index ][4] ;

       addr = addr.substring( 0, addr.length - 5);
       addr = addr.replace( /_/g, " ")

       this.mapInstance.addLocationMarker( addr );
    }

    handleCoordsChange( event ) 
    {
        var coords = []
        this.setState( prevState => ({
              lastInsertedItem: {...prevState.lastInsertedItem, coords: coords }
        }));
    }

    handleSupplyCountChange( event )
    {
        this.setState( prevState => ({
              lastInsertedItem: {...prevState.lastInsertedItem, coords: coords }
        }));
    }

    handleItemNameChange( event )
    {

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
                                    <Typography variant="subtitle2" color="textSecondary">
                                        {item[4].replace(/_/g, " ")}
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
        </div>
        )
    }
}

SupplyTab.propTypes = {

}

export default SupplyTab;
