/* global describe, beforeEach, afterEach, it, initDOM, cleanDOM */
import assert from 'assert';

let React;
let TestUtils;

describe("Button", () => {
  beforeEach(() => {
    initDOM();
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
  });

  afterEach(() => {
    cleanDOM();
  });

  it("clicks the button", () => {
    const Button = require('../Button');

    const stub = TestUtils.renderIntoDocument(<Button />);

    assert.equal(stub.state.clicked, false);

    TestUtils.Simulate.click(stub.getDOMNode());

    assert.equal(stub.state.clicked, true);
  });
});

