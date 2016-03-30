import expect from 'expect';
import * as actions from '../../src/actions/index';
import { CP_TextBox, CP_Button, CP_Dropdown, CP_TextArea, CP_Link, CP_Radio, CP_ButtonGroup} from '../../src/components/ToolBoxComponents';

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      payload: {
        id: 0,
        text: 'Use Redux'
      }
    })
  });

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      payload: {
        filter: 'active'
      }
    })
  });

  it('toogleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      payload: {
        id: 1
      }
    })
  });

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
