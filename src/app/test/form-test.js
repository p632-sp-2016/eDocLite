/**
 * Created by parikhv on 2/6/16.
 */

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var Form = require('../components/Form');

describe("Form", function () {
    it('renders without problems', function () {
        var form = TestUtils.renderIntoDocument(<Form />);

        var input = TestUtils.findRenderedDOMComponentWithTag(
            form, 'input'
        );

        var p = TestUtils.findRenderedDOMComponentWithTag(
            form, 'p'
        );

        expect(input.getDOMNode().textContent).toEqual(p.getDOMNode().textContent);
    });
});