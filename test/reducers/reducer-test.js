import expect from 'expect'
import components from '../../src/reducers/components'
import * as ToolBoxActions from '../../src/components/ToolBoxComponents';
import deepFreeze from 'deep-freeze';

describe('Components reducer', () => {
 let component = ToolBoxActions.TextBox;

 it('should add a new component to the state', () => {
   const input = {};
   deepFreeze(input);
   expect(
     components(input, {
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

   const input = {
     componentArray:{
       0: {
         component: component,
         props: component.defaultProps
       }
     },
     selectedComponent: -1
   };
  //  deepFreeze(input);

   expect(
     components(input, {
       type: 'SELECT_COMPONENT',
       payload: {
         id: 0
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
       selectedComponent: 0
     }
   )
 });

 it('should edit the modified component', () => {

   const input = {
     componentArray:{
       0: {
         component: component,
         props: component.defaultProps
       }
     },
     selectedComponent: -1
   };
  //  deepFreeze(input);

   expect(
     components(input, {
       type: 'EDIT_COMPONENT',
       payload: {
         id: 0,
         props: {
           label: "abc",
           placeholder: "xyz"
         }
       }
     })
   ).toEqual(
     {
       componentArray:{
         0: {
           component: component,
           props: {
             label: "abc",
             placeholder: "xyz"
           }
         }
       },
       selectedComponent: -1
     }
   )
 });

 it('should delete the clicked component', () => {

   const input = {
     componentArray:{
       0: {
         component: component,
         props: component.defaultProps
       }
     },
     selectedComponent: -1
   };
  //  deepFreeze(input);

   expect(
     components(input, {
       type: 'DELETE_COMPONENT',
       payload: {
         id: 0
       }
     })
   ).toEqual(
     {
       componentArray:{},
       selectedComponent: -1
     }
   )
 });

});
