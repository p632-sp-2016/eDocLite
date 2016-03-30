import expect from 'expect';
import * as actions from '../../src/actions/index';
import { CP_TextBox, CP_Button, CP_Dropdown, CP_TextArea, CP_Link, CP_Radio, CP_ButtonGroup} from '../../src/components/ToolBoxComponents';

describe('todo actions', () => {
  it('selectComponent should create SELECT_COMPONENT action', () => {
    expect(actions.selectComponent(5)).toEqual({
      type: 'SELECT_COMPONENT',
      payload: {
        id: 5
      }
    })
  });


  it('addComponent should create ADD_COMPONENT action', () => {
    let component={CP_ButtonGroup};
    expect(actions.addCompnent(component)).toEqual({
      type: 'ADD_COMPONENT',
      payload: {
        id: 0,
        component,
        props: {
            label: "TextBox"
        }
      }
    })
  });
});
