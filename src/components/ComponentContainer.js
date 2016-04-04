/**
 * Created by parikhv on 3/9/16.
 */
import React, { PropTypes } from 'react';
import { Grid, Col} from 'react-bootstrap';

/**
 * ComponentContainer
 */
class ComponentContainer extends React.Component {

    render() {
        const Props = this.props.component.props;
        const Component = <this.props.component.component {...Props}/>;

        return (
            <Grid id="ComponentContainer" >
            <Col xs={4} md={10}>
                {Component}
            </Col>
            </Grid>
        );
    }
}

export default ComponentContainer;
