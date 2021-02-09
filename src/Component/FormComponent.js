import React, {Component} from 'react';
import ListingComponent from "./ListingComponent";
import OsPreferences from "./OsPreferences";
import SkillsSelectComponent from "./SkillsSelectComponent";
import GenderSelection from "./GenderSelection";
import ProfileImageComponent from "./ProfileImageComponent";

class FormComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            gender: 'male',
            skill: 'vue',
            description: '',
            error: {status: false, message: ''},
            myfile: {},
            osPreference: [],
            persons: []
        };

        //Input Ref
        this.inputRef = React.createRef();

        //OS Preference Ref
        this.windowRef = React.createRef();
        this.macRef = React.createRef();
        this.linuxRef = React.createRef();

        //Skills Ref
        this.skillsRef = React.createRef();

        //Gender Ref
        this.maleRef = React.createRef();
        this.femaleRef = React.createRef();

        //File Ref
        this.fileRef = React.createRef();

    };

    componentDidMount() {
        this.tempRef = [];
        this.resetForm();
    }
    nameChangeHandler = (event) => {
        let name = event.target.value;
        this.setState({
            name,
        })
    }
    passwordChangeHandler = (event) => {
        this.setState({
            password: event.target.value,
        })
    }
    genderChangeHandler = (event, gender) => {
        this.setState({
            gender: event.target.value,
        })
    }
    skillChangeHandler = (event) => {
        this.setState({
            skill: event.target.value,
        })
    }
    descriptionChangeHandler = (event) => {
        let description = event.target.value;
        this.setState({
            description
        })
    }
    clickHandler = () => {
        const name = this.state.name;
        const password = this.state.password;
        const skill = this.state.skill;
        const gender = this.state.gender;
        const description = this.state.description;
        const osPreference = this.state.osPreference;
        const myfile = this.state.myfile;
        const person = {name, password, skill, gender, description, osPreference, myfile}
        this.setState(prevState => ({
            persons: [...prevState.persons, person]
        }),()=>{
            this.resetForm();
        });
    }
    osPreferenceChangeHandler = (event) => {
        let os = event.target.value;

        let osIndex = this.tempRef.findIndex(element => element == os);
        osIndex == -1 ? this.tempRef.push(os) : this.tempRef.splice(osIndex, 1);
        let errorState = {status: true, message: 'Please Select any OS'};
        let errorNormalState = {status: false, message: ''};
        let error = this.tempRef.length <= 0 ? errorState : errorNormalState;
        this.setState({
            osPreference: this.tempRef,
            error
        })
    }
    fileChangeHandler = (event) => {
        let {lastModified, name, size, type} = event.target.files[0];
        let myfile = {lastModified, name, size, type}
        this.setState({
            myfile
        })
    }
    resetForm = () => {
        this.setState({
            name: '',
            password: '',
            gender: 'male',
            skill: 'vue',
            description: '',
            error: {status: true, message: ''},
            osPreference: [],
            myfile: {}
        });
        this.inputRef.current.focus();
        this.tempRef = [];
        this.maleRef.current.checked = true;
        this.skillsRef.current.value = "vue";
        this.linuxRef.current.checked = false;
        this.macRef.current.checked = false;
        this.windowRef.current.checked = false;
        this.fileRef.current.value = "";
    }
    checkErrorStatus = () => {
        let errorState = {status: true, message: 'Please check the provided input'};
        let errorNormalState = {status: false, message: ''};
        let error = (this.state.name !== '' && this.state.name.length <= 2) || (this.state.description !== '' && this.state.description.length <= 2) || (this.state.osPreference.length <= 0) ? errorState : errorNormalState;
        this.setState({error});
    }
    removePersonFromPersonsArray(name){
        let namedPerson = this.state.persons.findIndex(element => element.name == name);
        let tempArray = this.state.persons;
        tempArray.splice(namedPerson, 1) ;
        this.setState({
            persons: tempArray,
        });
    }
    render() {

        return (
            <div className="container">
                {this.state.error.message != '' && <div className='alert alert-danger'>{this.state.error.message}</div>}
                <h4>React Form</h4>
                <div className='row'>
                    <input className="form-control col-sm-5 mb-4 mr-4" type="text" placeholder="Name Here"
                           onChange={this.nameChangeHandler} value={this.state.name} ref={this.inputRef}
                           onBlur={this.checkErrorStatus}
                    />

                    <input className="form-control col-sm-5 mb-4" type="password" placeholder="Password Here"
                           onChange={this.passwordChangeHandler} value={this.state.password}
                           onBlur={this.checkErrorStatus}
                    />
                </div>
                <div className='row'>
                    <textarea name="description" cols="30" rows="5" className="form-control mb-4 col-sm-11"
                              onChange={this.descriptionChangeHandler} placeholder="Description Here"
                              value={this.state.description} onBlur={this.checkErrorStatus}>
                    </textarea>
                </div>
                <div className='row'>
                    <div className='col-sm-4 d-inline'>
                        <GenderSelection checked = {true} id={'male'} value={'male'} label={'Male '} changeHandler={(event) => this.genderChangeHandler(event, 'male')} blurHandler={this.checkErrorStatus} ref={this.maleRef} />
                        <GenderSelection id={'female'} value={'female'} label={'Female '} changeHandler={(event) => this.genderChangeHandler(event, 'female')} blurHandler={this.checkErrorStatus} ref={this.femaleRef} />
                    </div>
                    <div className='col-sm-4 d-inline'>
                        <SkillsSelectComponent label={'Frameworks'} errorHandler = {this.checkErrorStatus} changeHandler={(event)=>this.skillChangeHandler(event)}ref={this.skillsRef}/>
                    </div>
                    <div className='col-sm-4 d-inline'>
                        <OsPreferences value={'linux'} id={'linux'} ref={this.linuxRef} label={'Linux'} changeFired = {(event) => this.osPreferenceChangeHandler(event)} blurHandler={()=>{this.checkErrorStatus()}}/>
                        <OsPreferences value={'macos'} id={'macos'} ref={this.macRef} label={'Mac OS'} changeFired = {(event) => this.osPreferenceChangeHandler(event)} blurHandler={()=>{this.checkErrorStatus()}}/>
                        <OsPreferences value={'linux'} id={'linux'} ref={this.windowRef} label={'Windows'} changeFired = {(event) => this.osPreferenceChangeHandler(event)} blurHandler={()=>{this.checkErrorStatus()}}/>
                    </div>
                </div>
                <div className='row'>
                    <ProfileImageComponent id={'profileImage'} ref={this.fileRef} changeHandler={(event)=>this.fileChangeHandler(event)} blurHandler={this.checkErrorStatus}/>
                </div>
                <button className="btn btn-primary pull-right" onClick={this.clickHandler}
                        disabled={this.state.error.status}>Submit
                </button>
                <div className='row'>
                    <div className='col-sm-12'>
                        <ListingComponent persons={this.state.persons} deletePerson = {(name)=>{this.removePersonFromPersonsArray(name)}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormComponent