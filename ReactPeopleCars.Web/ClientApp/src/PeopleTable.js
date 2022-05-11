import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: '',
            cars: []
        },
        people: [],
    }


    componentDidMount = async () => {
        await this.refreshPeople();
    }

    refreshPeople = async () => {
        const { data } = await axios.get('/api/PeopleCars/getall');
        this.setState({ people: data });
    }

    onTextChange = e => {
        const copy = { ...this.state.person };
        copy[e.target.name] = e.target.value;
        this.setState({ person: copy });
        console.log(this.state.person);
    }

    add = async () => {
        console.log(this.state.person);
        await axios.post('/api/peopleCars/addperson', this.state.person);
        await this.refreshPeople();

        this.setState({
            person: {
                firstName: '',
                lastName: '',
                age: ''
            }
        })
    }

    render() {
        const { people } = this.state;

        return <div className="container">
            <Link to='/addPerson' className="nav-link text-light">
                <button className="btn btn-info btn-block btn-lg mt-3">Add Person</button>
            </Link>
            <table className="table table-striped table-bordered mt-4">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Car Count</th>
                        <th>Add Car</th>
                        <th>Delete Cars</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((p, i) => <PersonRow key={i} person={p} />)}
                </tbody>
            </table>
        </div>
    }
}

export default PeopleTable;
