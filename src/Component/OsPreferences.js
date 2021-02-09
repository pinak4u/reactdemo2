import React,{Component} from "react";

class OsPreferences extends Component{
    constructor(props) {
        super(props);
    }
    osChangedHandler=(event)=>{
        this.props.changeFired(event);
    }
    osBlurHandler=()=>{
        this.props.blurHandler();
    }
    render() {
        return(
            <>
                <input type="checkbox" onChange={(event)=>this.osChangedHandler(event)}
                       name='os[]' value={this.props.value} id={this.props.id} onBlur={this.osBlurHandler} checked={this.props.checked}/>
                        <label htmlFor={this.props.id}>{this.props.label}</label>
            </>
        )
    }
}
export default OsPreferences;