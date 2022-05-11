import React from 'react';
import axios from 'axios';

class AddCar extends React.Component {

    state = {
        person: {
            id:'',
            firstName: '',
            lastName: '',
            age: '',
            cars: []
        },
        car: {
            make: '',
            model: '',
            year: '',
            PersonId: ''
        }
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/PeopleCars/getbyid?id=${id}`);
        this.setState({ person: data });
    }

    onTextChange = e => {
        const copy = { ...this.state.car };
        copy[e.target.name] = e.target.value;
        this.setState({ car: copy });
    }

    addCar = async () => {
        const { car, person } = this.state;
        car.PersonId = person.id;
        await axios.post('/api/peopleCars/addcar', car);
        this.props.history.push('/');
    }

    render() {
        const { firstName, lastName } = this.state.person;
        const { make, model, year } = this.state.car;

        return <div className="row">
            <div className="col-md-6 offset-md-3 card card-body bg-light">
                <h2>Add a car for {firstName} {lastName}</h2>
                <input type="text" className="form-control" name="make" placeholder="Make" value={make} onChange={this.onTextChange} />
                <br />
                <input type="text" className="form-control" name="model" placeholder="Model" value={model} onChange={this.onTextChange} />
                <br />
                <input type="text" className="form-control" name="year" placeholder="Year" value={year} onChange={this.onTextChange} />
                <br />
                <button className="btn btn-primary btn-lg btn-block" onClick={() => this.addCar()}>Submit</button>
            </div>
        </div>
    }
}

export default AddCar;
