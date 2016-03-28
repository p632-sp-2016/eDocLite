/**
 * Created by parikhv on 3/9/16.
 */
import React, { PropTypes } from 'react'
import { Grid, Col} from 'react-bootstrap';

/**
 * ComponentContainer
 */
class ComponentContainer extends React.Component {

    render() {
        const Component = <this.props.component.component/>;

        const { selected } = this.props;

        return (
            <Grid id="ComponentContainer" style={{
            background: selected ? 'darkred' : 'darkgrey'
          }}>
            <Col xs={4} md={10}>
                {Component}
            </Col>
            </Grid>
        )
    }
}

export default ComponentContainer;
