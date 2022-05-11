import React from 'react';
import { Link } from 'react-router-dom';

class PersonRow extends React.Component {
    render() {
        const { person } = this.props;
        return <tr>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
            <td>{person.cars.length}</td>
            <td>
                <Link to={`/AddCarPage/${person.id}`}>
                    <button className="btn btn-warning">Add Car</button>
                </Link>
            </td>
            <td>
                <Link to={`/DeleteCarPage/${person.id}`}>
                    <button className="btn btn-danger">Delete Cars</button>
                </Link>
            </td>
        </tr>
    }
}

export default PersonRow;