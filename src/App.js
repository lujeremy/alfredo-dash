import React, {Component} from 'react';
import Workouts from './components/workouts';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workouts: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost/api/workouts')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.setState({workouts: data.workouts})
            })
            .catch(console.log)
    }

    render() {
        return (
            <Workouts workouts={this.state.workouts}/>
        );
    }
}

export default App;
