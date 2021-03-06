import React, {Component} from 'react';
import './App.css';
import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Panel
} from "react-bootstrap";

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
    this.setState({[field]: e.target.value});
  }

  submit(e) {
    const r = this.state.apr / 100.0 / 12.0;
    const n = this.state.term * 12.0;
    const payment = (r * this.state.principle) / (1 - Math.pow(1 + r, -n));
    this.setState({payment});
  }

  render() {
    return (
      <Panel className='App'
             bsStyle='primary'
      >
        <Panel.Heading>
          <Panel.Title>Loan Calculator</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <FormGroup controlId={'principle'}>
            <ControlLabel>Principle:</ControlLabel>
            <FormControl type={'number'}
                         value={this.state.principle}
                         placeholder={'Principle'}
                         onChange={this.handleInput.bind(this, 'principle')}
            />
          </FormGroup>
          <FormGroup controlId={'apr'}>
            <ControlLabel>Interest Rate:</ControlLabel>
            <FormControl type={'number'}
                         value={this.state.apr}
                         placeholder={'APR'}
                         onChange={this.handleInput.bind(this, 'apr')}
            />
          </FormGroup>
          <FormGroup controlId={'term'}>
            <ControlLabel>Loan Term:</ControlLabel>
            <FormControl type={'number'}
                         value={this.state.term}
                         placeholder={'Term'}
                         onChange={this.handleInput.bind(this, 'term')}
            />
          </FormGroup>
          <FormGroup controlId={'payment'}>
            <ControlLabel>Monthly Payment</ControlLabel>
            <FormControl type={'number'}
                         value={this.state.payment}
                         placeholder={'Monthly Payment'}
                         onChange={this.handleInput.bind(this, 'payment')}
                         readOnly
            />
          </FormGroup>
          <Button bsStyle={'primary'}
                  onClick={this.submit}
          >
            Submit
          </Button>
        </Panel.Body>
      </Panel>
    );
  }
}

export default App;
