import React from 'react';

class Titlebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: null
        }
    }

   componentDidMount() {
        console.log( "title bar component mounted" )
    }

    render() {
        return(
            <div id="titlebar">
            </div>
        )
    }
}

export default Titlebar;