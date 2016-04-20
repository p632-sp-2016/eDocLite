import React, {  PropTypes, Component } from 'react';
import expect from 'expect'
import * as ToolBoxActions from '../../src/components/ToolBoxComponents';
import EditForm from '../../src/components/EditForm';
import TestUtils from "react-addons-test-utils";

describe('Edit form tests', () => {
 let component = ToolBoxActions.TextBox;
 let selectedComponent = 0;

 let c = {
   ...component,
   props: component.defaultProps
 };

 it('should render a new edit form for a textbox', () => {
    const shallowRenderer = TestUtils.createRenderer();

    shallowRenderer.render(<EditForm fields={ Object.keys(c.props) } selectedComponent={ selectedComponent } />);
    const component = shallowRenderer.getRenderOutput();
    expect(component.props.fields).toEqual(['elements', 'selectedElement']);
 });

});
