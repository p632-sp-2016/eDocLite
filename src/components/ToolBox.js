/**
 * Created by parikhv on 3/14/16.
 */
import React from 'react';
import Box from './Box';
import * as ToolBoxActions from './ToolBoxComponents';
import { Grid, ListGroup } from 'react-bootstrap';

/**
* This function represents toolbox components available for dragging into form builder.
**/
const ToolBox = () => {
    return (
        <Grid name="ToolBox" fluid>
            <ListGroup>
                <Box name='Text Input'  component={ToolBoxActions.TextBox}/>
                <Box name='Button' component={ToolBoxActions.Btn}/>
                <Box name='Drop Down' component={ToolBoxActions.Dropdown}/>
                <Box name='Text Area' component={ToolBoxActions.TextArea}/>
                <Box name='Link' component={ToolBoxActions.Link}/>
                <Box name='Radio' component={ToolBoxActions.RadioButton}/>
                <Box name='ButtonGroup' component={ToolBoxActions.ButtonGroup}/>
            </ListGroup>
        </Grid>
    );
};

export default ToolBox;
