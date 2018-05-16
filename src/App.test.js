import React from 'react';
import TestRenderer from 'react-test-renderer';
import {Panel} from "react-bootstrap";
import App from './App';

it('renders without crashing', () => {
  const testRenderer = TestRenderer.create(<App />);
  testRenderer.unmount();
});

it('renders a Panel control', () => {
  const testRenderer = TestRenderer.create(<App />);
  const app = testRenderer.root;
  const formGroups = app.findAllByType(Panel);
  expect(formGroups).toHaveLength(1);
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
    const formGroups = app.findAllByType(Panel);
    expect(formGroups).toHaveLength(1);
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
