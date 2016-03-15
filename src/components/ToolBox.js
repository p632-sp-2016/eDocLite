/**
 * Created by parikhv on 3/14/16.
 */
import React from 'react';
import Box from './Box';
import { CP_TextBox, CP_Button } from './ToolBoxComponents';
import { Grid, ListGroup } from 'react-bootstrap';


const ToolBox = () => {
    return (
        <Grid name="ToolBox" fluid>
            <ListGroup>
                <Box name='Text Input' component={CP_TextBox}/>
                <Box name='Button' component={CP_Button}/>
            </ListGroup>
        </Grid>
    )
};

export default ToolBox;
