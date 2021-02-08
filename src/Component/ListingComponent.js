import React, {Component} from 'react';

class ListingComponent extends Component {
    constructor(props) {
        super(props);
    }

    personClickHandler=(name)=>{
        this.props.deletePerson(name);
    }
    render() {
        let PersonLists = this.props.persons.length > 0 ?
            this.props.persons.map((person) => {
                return (
                    <li key={Math.random()}>
                            <span>{person.name}</span> - <span>{person.skill.toUpperCase()} DEVELOPER</span>
                            <button className={'btn btn-danger btn-sm mb-2'} onClick={()=>this.personClickHandler(person.name)}>Remove {person.name}</button>
                    </li>)
            }) :
            <li>No data found.</li>
        return (
            <div>
                <ol>
                    {PersonLists}
                </ol>
            </div>
        )
    }
}

export default ListingComponent;