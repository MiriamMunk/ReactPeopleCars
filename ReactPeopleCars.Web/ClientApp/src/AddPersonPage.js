import React from 'react';
import axios from 'axios';

class AddPerson extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    onTextChange = e => {
        const copy = { ...this.state.person };
        copy[e.target.name] = e.target.value;
        this.setState({ person: copy });
    }

    add = async () => {
        await axios.post('/api/peopleCars/addperson', this.state.person);
        this.props.history.push('/')
        
    }

    render() {
        const {  firstName, lastName, age } = this.state;
        return <div className="row">
            <div className="col-md-6 offset-md-3 card card-body bg-light">
                <h2>Add a New Person</h2>
                <input type="text" className="form-control" name="firstName" placeholder="First Name" value={firstName} onChange={this.onTextChange} />
                <br />
                <input type="text" className="form-control" name="lastName" placeholder="Last Name" value={lastName} onChange={this.onTextChange} />
                <br />
                <input type="text" className="form-control" name="age" placeholder="Age" value={age} onChange={this.onTextChange} />
                <br />
                <button className="btn btn-primary btn-lg btn-block" onClick={this.add}>Submit</button>
            </div>
        </div>
    }
}

export default AddPerson;
