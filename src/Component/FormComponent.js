import React, {Component} from 'react';

class FormComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            gender: 'male',
            skill: 'vue',
            description: '',
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
        this.setState({
            name: event.target.value,
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
        this.setState({
            description: event.target.value,
        })
    }

    clickHandler = () => {
        const name = this.state.name;
        const password = this.state.password;
        const skill = this.state.skill;
        const gender = this.state.gender;
        const description = this.state.description;
        const osPreference = this.state.osPreference;
        const person = {name, password, skill, gender, description, osPreference}
        this.setState(prevState => ({
            persons: [...prevState.persons, person]
        }), () => {
            this.resetForm();
            console.log(this.state.persons);
        });
    }

    osPreferenceChangeHandler = (event) => {
        let os = event.target.value;
        let osIndex = this.tempRef.findIndex(element => element == os);
        osIndex == -1 ? this.tempRef.push(os) : this.tempRef.splice(osIndex, 1);
        this.setState({
            osPreference: this.tempRef
        })
    }
    fileChangeHandler = (event)=>{
        console.log(this.fileRef.current.files);
        console.log(event.target.files);
    }
    resetForm = () => {
        this.setState({
            name: '',
            password: '',
            gender: 'male',
            skill: 'vue',
            description: '',
        });
        this.inputRef.current.focus();
        this.tempRef = [];
        this.maleRef.current.checked = true;
        this.skillsRef.current.value = "vue";
        this.linuxRef.current.checked = false;
        this.macRef.current.checked = false;
        this.windowRef.current.checked = false;
        // this.fileRef.current.files=[];
    }

    render() {
        return (
            <div className="container">
                <h4>React Form</h4>
                <div className='row'>
                    <input className="form-control col-sm-5 mb-4 mr-4" type="text" placeholder="Name Here"
                           onChange={this.nameChangeHandler} value={this.state.name} ref={this.inputRef}
                    />
                    <input className="form-control col-sm-5 mb-4" type="password" placeholder="Password Here"
                           onChange={this.passwordChangeHandler} value={this.state.password}
                    />
                </div>
                <div className='row'>
                    <textarea name="description" cols="30" rows="5" className="form-control mb-4 col-sm-11"
                              onChange={this.descriptionChangeHandler} placeholder="Description Here"
                              value={this.state.description}>
                    </textarea>
                </div>
                <div className='row'>
                    <div className='col-sm-4 d-inline'>
                        <input id="genderMale" type="radio" name="gender" value="male" ref={this.maleRef}
                               onChange={(event) => this.genderChangeHandler(event, 'male')}
                        />
                        <label htmlFor="genderMale">Male</label>
                        <input id="genderFemale" type="radio" name="gender" value="female" ref={this.femaleRef}
                               onChange={(event) => this.genderChangeHandler(event, 'female')}
                        />
                        <label htmlFor="genderFemale">Female</label>
                    </div>
                    <div className='col-sm-4 d-inline'>
                        <label htmlFor="skills">Skills</label>
                        <select name="skills" id="skills" onChange={this.skillChangeHandler} ref={this.skillsRef}>
                            <option value="vue">Vue</option>
                            <option value="angular">Angular</option>
                            <option value="react">React</option>
                        </select>
                    </div>
                    <div className='col-sm-4 d-inline'>

                        <input type="checkbox" onChange={(event) => this.osPreferenceChangeHandler(event)} name='os[]'
                               value="linux" id="linux" ref={this.linuxRef}/>
                        <label htmlFor="linux">Linux</label>

                        <input type="checkbox" onChange={(event) => this.osPreferenceChangeHandler(event)} name='os[]'
                               value="macos" id="macos" ref={this.macRef}/>
                        <label htmlFor="macos">Mac OS</label>

                        <input type="checkbox" onChange={(event) => this.osPreferenceChangeHandler(event)} name='os[]'
                               value="windows" id="windows" ref={this.windowRef}/>
                        <label htmlFor="windows">Windows</label>

                    </div>
                </div>
                <div className='row'>
                    <input type="file" onChange={this.fileChangeHandler} ref={this.fileRef}/>
                </div>
                <button className="btn btn-primary pull-right" onClick={this.clickHandler}>Submit</button>
            </div>
        )
    }
}

export default FormComponent