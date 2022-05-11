import React from 'react';
import { Route } from 'react-router-dom';
import addPerson from './AddPersonPage';
import peopleTable from './PeopleTable';
import Layout from './Layout';
import AddCarPage from './AddCarPage';
import DeleteCars from './DeleteCarPage';

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Route exact path='/addPerson' component={addPerson} />
                <Route exact path='/' component={peopleTable} />
                <Route exact path='/AddCarPage/:id' component={AddCarPage} />
                <Route exact path='/DeleteCarPage/:id' component={DeleteCars} />
            </Layout>
        )
    }
}

export default App;