/* global describe, beforeEach, afterEach, it, initDOM, cleanDOM */
import assert from 'assert';

let React;
let TestUtils;

describe("TextInput", () => {
  beforeEach(() => {
    initDOM();
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
  });

  afterEach(() => {
    cleanDOM();
  });

  it("changes the text input value", () => {
    const TextInput = require('../TextInput');

    const stub = TestUtils.renderIntoDocument(<TextInput />);

    assert.equal(stub.state.value, '');

    TestUtils.Simulate.change(stub.getDOMNode(), {target: {value: 'Hello, world'}});

    assert.equal(stub.state.value, 'Hello, world');
  });
});

