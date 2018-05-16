import React from 'react';
import TestRenderer from 'react-test-renderer';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Panel} from "react-bootstrap";
import App from './App';

it('renders without crashing', () => {
  const testRenderer = TestRenderer.create(<App />);
  testRenderer.unmount();
});

it('renders a Panel control', () => {
  const testRenderer = TestRenderer.create(<App />);
  const app = testRenderer.root;
  const panel = app.findAllByType(Panel);
  expect(panel).toHaveLength(1);
  testRenderer.unmount();
});

it('should render Panel.Heading', () => {
  const testRenderer = TestRenderer.create(<App />);
  const app = testRenderer.root;
  const panelHeading = app.findAllByType(Panel.Heading);
  expect(panelHeading).toHaveLength(1);
  testRenderer.unmount();
});

it('should render Panel.Heading', () => {
  const testRenderer = TestRenderer.create(<App />);
  const app = testRenderer.root;
  const panelBody = app.findAllByType(Panel.Body);
  expect(panelBody).toHaveLength(1);
  testRenderer.unmount();
});

describe('App tests', () => {
  it('renders a Panel control', () => {
    const testRenderer = TestRenderer.create(<App />);
    const app = testRenderer.root;
    const panel = app.findAllByType(Panel);
    expect(panel).toHaveLength(1);
    testRenderer.unmount();
  });

  it('should render Panel.Heading', () => {
    const testRenderer = TestRenderer.create(<App />);
    const app = testRenderer.root;
    const panelHeading = app.findAllByType(Panel.Heading);
    expect(panelHeading).toHaveLength(1);
    testRenderer.unmount();
  });

  it('should render Panel.Heading', () => {
    const testRenderer = TestRenderer.create(<App />);
    const app = testRenderer.root;
    const panelBody = app.findAllByType(Panel.Body);
    expect(panelBody).toHaveLength(1);
    testRenderer.unmount();
  });
});

describe('App tests with beforeEach()', () => {
  let renderer;
  let app;

  beforeEach(() => {
    renderer = TestRenderer.create(<App />);
    app = renderer.root;
  });

  afterEach(() => {
    renderer.unmount();
  });

  it('renders a Panel control', () => {
    const panel = app.findAllByType(Panel);
    expect(panel).toHaveLength(1);
  });

  it('should render Panel.Heading', () => {
    const panelHeading = app.findAllByType(Panel.Heading);
    expect(panelHeading).toHaveLength(1);
  });

  it('should render Panel.Heading', () => {
    const panelBody = app.findAllByType(Panel.Body);
    expect(panelBody).toHaveLength(1);
  });
});

configure({ adapter: new Adapter() });

describe('App tests with enzyme', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App/>);
  });

  it('renders a Panel control', () => {
    const panel = wrapper.find(Panel);
    expect(panel).toHaveLength(1);
  });

  it('should render Panel.Heading', () => {
    const formGroups = wrapper.find(Panel.Heading);
    expect(formGroups).toHaveLength(1);
  });

  it('should render Panel.Heading', () => {
    const formGroups = wrapper.find(Panel.Body);
    expect(formGroups).toHaveLength(1);
  });
});
