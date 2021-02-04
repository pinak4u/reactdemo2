import React, {Component} from 'react';

class FormComponent extends Component {
    constructor() {
        super();
        this.state = {
            name:"",
            password:"",
            gender:"male",
        }
    }
    render() {
        return (
            <div className="container">
                <h4>React Form</h4>
                <input className="form-control mb-4 mt-4" type="text" placeholder="Name Here"/>
                <input className="form-control mb-4" type="password" placeholder="Password Here"/>
                <div>
                    <label htmlFor="genderMale">Male
                        <input id="genderMale" className="form-control" type="radio" name="gender" value="male" />
                    </label>
                </div>
                <div>
                    <label htmlFor="genderFemale">Female
                        <input id="genderFemale" className="form-control" type="radio" name="gender" value="female" />
                    </label>
                </div>
                <button className="btn btn-primary pull-right">Submit</button>
            </div>
        )
    }
}

export default FormComponent