/**
 * Created by parikhv on 2/6/16.
 */

/*eslint-disable no-unused-vars*/
var React = require('react');
var Form = require('../../src/components/Form');
/*eslint-enable no-unused-vars*/

var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

describe("Form", function () {
    it('renders without problems', function () {
        var form = TestUtils.renderIntoDocument(<Form />);

        var input = TestUtils.findRenderedDOMComponentWithTag(
            form, 'input'
        );

        var p = TestUtils.findRenderedDOMComponentWithTag(
            form, 'h3'
        );

        expect(input.getDOMNode().textContent).toEqual(p.getDOMNode().textContent);        
    });
});
