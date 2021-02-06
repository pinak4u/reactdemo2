import React, {Component} from 'react';

export default class ListingComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <p>test</p>
            </div>
        )
    }
}