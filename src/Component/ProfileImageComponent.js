import React, {Component} from "react";

class ProfileImageComponent extends Component
{
    constructor(props) {
        super(props);
    }
    fileChangeHandler=(event)=>{
        this.props.changeHandler(event);
    }
    checkErrorStatus=()=>{
        this.props.blurHandler();
    }
    render() {
        return(
            <>
                <input id={this.props.id} type="file" onChange={(event)=>this.fileChangeHandler(event)} onBlur={this.checkErrorStatus}/>
            </>
        );
    }
}

export default ProfileImageComponent;