/**
 * Created by parikhv on 3/9/16.
 */
import React, { PropTypes } from 'react'
import { Grid } from 'react-bootstrap';


class ComponentContainer extends React.Component {

    render() {
        const Component = <this.props.component.component />;

        return (
            <Grid id="ComponentContainer">
                {Component}
            </Grid>
        )
    }
}

export default ComponentContainer;

