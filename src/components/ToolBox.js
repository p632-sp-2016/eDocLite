/**
 * Created by parikhv on 3/14/16.
 */
import React from 'react';
import Box from './Box';
import { CP_TextBox, CP_Button, CP_Dropdown, CP_TextArea, CP_Link, CP_Radio, CP_ButtonGroup} from './ToolBoxComponents';
import { Grid, ListGroup } from 'react-bootstrap';


const ToolBox = () => {
    return (
        <Grid name="ToolBox" fluid>
            <ListGroup>
                <Box name='Text Input'  component={CP_TextBox}/>
                <Box name='Button' component={CP_Button}/>
                <Box name='Drop Down' component={CP_Dropdown}/>
                <Box name='Text Area' component={CP_TextArea}/>
                <Box name='Link' component={CP_Link}/>
                <Box name='Radio' component={CP_Radio}/>
                <Box name='ButtonGroup' component={CP_ButtonGroup}/>
            </ListGroup>
        </Grid>
    )
};

export default ToolBox;
