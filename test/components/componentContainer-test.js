import React, { Component } from 'react';
import expect from 'expect';
import * as ToolBoxActions from '../../src/components/ToolBoxComponents';
import ComponentContainer from '../../src/components/ComponentContainer';
import TestUtils from "react-addons-test-utils";

describe('ComponentContainer tests', () => {
  let component = ToolBoxActions.TextBox;

  let c = {
    ...component,
    props: component.defaultProps
  };

  it('should render a new component', () => {
    const shallowRenderer = TestUtils.createRenderer();

    shallowRenderer.render(<ComponentContainer component={c} />);
    const component = shallowRenderer.getRenderOutput();
    expect(component.props.componentClass).toEqual('div');
    expect(component.props.children.props.elements[0].label).toEqual('Text Box');
  });

});
