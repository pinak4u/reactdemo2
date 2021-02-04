import React, {Component} from 'react';

class FormComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            gender: 'male',
            skill: 'vue',
            persons: []
        }
    };

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

    clickHandler = () => {
        const name = this.state.name;
        const password = this.state.password;
        const skill = this.state.skill;
        const gender = this.state.gender;
        const person = {name, password, skill, gender}
        this.setState(prevState => ({
            persons: [...prevState.persons, person]
        }), () => {
            console.log(this.state.persons);
        });
    }

    render() {
        return (
            <div className="container">
                <h4>React Form</h4>
                <div className='row'>
                    <input className="form-control col-sm-5 mb-4 mr-4" type="text" placeholder="Name Here"
                           onChange={this.nameChangeHandler} value={this.state.name}
                    />
                    <input className="form-control col-sm-5 mb-4" type="password" placeholder="Password Here"
                           onChange={this.passwordChangeHandler} value={this.state.password}
                    />
                </div>
                <div>
                    <div className='col-sm-4 d-inline'>
                        <input id="genderMale" type="radio" name="gender" value="male"
                               onChange={(event) => this.genderChangeHandler(event, 'male')}
                               checked={this.state.gender == "male"}
                        />
                        <label htmlFor="genderMale">Male</label>
                        <input id="genderFemale" type="radio" name="gender" value="female"
                               onChange={(event) => this.genderChangeHandler(event, 'female')}
                               checked={this.state.gender == "female"}
                        />
                        <label htmlFor="genderFemale">Female</label>
                    </div>
                    <div className='col-sm-4 d-inline'>
                        <label htmlFor="skills">Skills</label>
                        <select name="skills" id="skills" onChange={this.skillChangeHandler}>
                            <option value="vue">Vue</option>
                            <option value="angular">Angular</option>
                            <option value="react">React</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary pull-right" onClick={this.clickHandler}>Submit</button>
            </div>
        )
    }
}

export default FormComponent