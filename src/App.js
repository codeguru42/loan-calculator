import React, {Component} from 'react';
import './App.css';
import {Button, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.submit = this.submit.bind(this);
    this.state = {
        principle: '',
        apr: '',
        term: '',
        payment: '',
    };
  }

  handleInput(field, e) {
    this.setState({[field]: e.target.value})
  }

  submit(e) {
    alert(`Hello, ${this.state.name}`);
  }

  render() {
    return (
        <div className="App">
          <FormGroup controlId={'principle'}>
            <ControlLabel>Principle:</ControlLabel>
            <FormControl type={'text'}
                         value={this.state.principle}
                         placeholder={'Principle'}
                         onChange={this.handleInput.bind(this, 'principle')}
            />
          </FormGroup>
          <FormGroup controlId={'apr'}>
            <ControlLabel>Interest Rate:</ControlLabel>
            <FormControl type={'text'}
                         value={this.state.apr}
                         placeholder={'APR'}
                         onChange={this.handleInput.bind(this, 'apr')}
            />
          </FormGroup>
          <FormGroup controlId={'term'}>
            <ControlLabel>Loan Term:</ControlLabel>
            <FormControl type={'text'}
                         value={this.state.term}
                         placeholder={'Term'}
                         onChange={this.handleInput.bind(this, 'term')}
            />
          </FormGroup>
          <FormGroup controlId={'payment'}>
            <ControlLabel>Monthly Payment</ControlLabel>
            <FormControl type={'text'}
                         value={this.state.payment}
                         placeholder={'Monthly Payment'}
                         onChange={this.handleInput.bind(this, 'payment')}
                         readonly
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
