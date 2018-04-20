import React, {Component} from 'react';
import './App.css';
import {Button, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {name: ''};
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }

  submit(e) {
    alert(`Hello, ${this.state.name}`);
  }

  render() {
    return (
        <div className="App">
          <FormGroup controlId={'formName'}>
            <ControlLabel>Name:</ControlLabel>
            <FormControl type={'text'}
                         value={this.state.name}
                         placeholder={'Enter your name'}
                         onChange={this.handleNameChange}
            />
          </FormGroup>
          <Button bsStyle={'primary'}
                  onClick={this.submit}
          >
            Submit
          </Button>
        </div>
    );
  }
}

export default App;
