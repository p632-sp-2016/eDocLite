import expect from 'expect';
import * as actions from '../../src/actions/index';
import * as ToolBoxActions from '../../src/components/ToolBoxComponents';

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
     let component= ToolBoxActions.ButtonGroup;
     expect(actions.addCompnent(component)).toEqual({
       type: 'ADD_COMPONENT',
       payload: {
         id: 0,
         component,
         props: component.defaultProps
       }
     })
   });

   it('selectComponent should return SELECT_COMPONENT action', () => {
     expect(actions.selectComponent(1)).toEqual({
       type: 'SELECT_COMPONENT',
       payload: {
         id: 1
       }
     })
   });

   it('editComponent should return EDIT_COMPONENT action', () => {
     const input = {
         label: 'abc',
         placeholder: 'klm'
     };
     expect(actions.editComponent(0, input)).toEqual({
       type: 'EDIT_COMPONENT',
       payload: {
         id: 0,
         props: {
           label: 'abc',
           placeholder: 'klm'
         }
       }
     })
   });

   it('deleteComponent should return DELETE_COMPONENT action', () => {
     expect(actions.deleteComponent(1)).toEqual({
       type: 'DELETE_COMPONENT',
       payload: {
         id: 1
       }
     })
   });
});
