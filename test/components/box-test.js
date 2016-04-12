import React, { Component } from 'react';
import expect from 'expect';
import * as ToolBoxActions from '../../src/components/ToolBoxComponents';
import Box from '../../src/components/Box';
import TestUtils from "react-addons-test-utils";

describe('Box tests', () => {

  it('should drop a new box on form builder', () => {
    var OriginalBox = Box.DecoratedComponent;
    var identity = function (el) { return el; };

    var root = TestUtils.renderIntoDocument(
        <OriginalBox name='Text Input' connectDragSource={identity} isDragging />
    );
    var comp = TestUtils.findRenderedDOMComponentWithClass(root, 'glyphicon glyphicon-pencil');
    expect(comp.props.glyph).toEqual('pencil');
  });

});
