import expect from 'expect'
import components from '../../src/reducers/components'
import * as ToolBoxActions from '../../src/components/ToolBoxComponents';

describe('Components reducer', () => {

 it('should add a new component to the state', () => {
   let component = ToolBoxActions.TextBox;
   expect(
     components({}, {
       type: 'ADD_COMPONENT',
       payload: {
         id: 0,
         component: component,
         props: component.defaultProps
       }
     })
   ).toEqual(
     {
       componentArray:{
         0: {
           component: component,
           props: component.defaultProps
         }
       },
       selectedComponent: -1
     }
   )
 });

 it('should select the clicked component', () => {
   expect(
     components([], {
       type: 'SELECT_COMPONENT',
       payload: {
         id: 0
       }
     })
   ).toEqual(
       {
         selectedComponent: 0
       }
   )
 });

});
