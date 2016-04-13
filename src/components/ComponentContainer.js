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
          <Col sm={5} md={8} style={{ pointerEvents: 'none'}}>
            {Component}
          </Col>
        );
    }
}

export default ComponentContainer;
