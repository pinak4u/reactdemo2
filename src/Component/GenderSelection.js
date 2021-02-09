import React, {Component} from "react";

class GenderSelection extends Component {
    constructor(props) {
        super(props);
    }

    changeHandler = (event, gender) => {
        this.props.changeHandler(event, gender);
    }
    blurHandler = () => {
        this.props.blurHandler();
    }

    render() {
        let checked = this.props.checked;
        return (
            <>
                <input id={this.props.id} type="radio" name="gender" value={this.props.value} checked={checked}
                       onChange={(event) => this.changeHandler(event, 'male')}
                       onBlur={this.blurHandler}
                />
                <label htmlFor={this.props.id}>{this.props.label}</label>
            </>
        )
    }
}

export default GenderSelection;