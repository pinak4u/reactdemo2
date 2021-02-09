import React, {Component, Fragment} from "react";

class SkillsSelectComponent extends Component{
    constructor(props) {
        super(props);
    }
    skillChangeHandler = (event)=>{
        this.props.changeHandler(event);
    }
    checkErrorStatus = ()=>{
        this.props.errorHandler();
    }
    render() {
        return(
            <Fragment>
            <label htmlFor="skills">{this.props.label}</label>
            <select name="skills" id="skills" onChange={(event)=>this.skillChangeHandler(event)}
                    onBlur={this.checkErrorStatus}>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
                <option value="react">React</option>
            </select>
            </Fragment>
        )
    }
}
export default SkillsSelectComponent;