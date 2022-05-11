import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DeleteCars extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            age: '',
            cars: []
        }
    }

    addCarRow = (car, key) => {
        return <tr key={key}>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
        </tr>
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/PeopleCars/getbyid?id=${id}`);
        this.setState({ person: data });
    }

    Delete = async () => {
        await axios.post(`/api/peopleCars/deleteCars?id=${this.state.person.id}`);
        this.props.history.push('/')
    }

    render() {
        const { cars } = this.state.person;

        return <div className="container">
            <table className="table table-striped table-bordered mt-5">
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((c, i) => this.addCarRow(c, i))}
                </tbody>
            </table>
            <h3>Are you sure you want to delete all of these cars?</h3>
            <Link to={'/'}>
                <button className="btn btn-primary btn-lg">No</button>
            </Link>
            <div className="mt-3">
                <button className="btn btn-danger btn-lg" onClick={this.Delete}>Yes</button>
            </div>
        </div>
    }
}

export default DeleteCars;
