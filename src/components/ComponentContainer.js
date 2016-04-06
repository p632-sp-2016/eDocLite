/**
 * Created by parikhv on 3/9/16.
 */
import React, { PropTypes } from 'react';
import { Grid, Col} from 'react-bootstrap';


/**
 *  This class represents the container for the form build by dragged components.
 *  This class wraps Components of the form built by drag and drop functions.
 */
export default class ComponentContainer extends React.Component {
  /**
   *  ComponentContainer UI render method
   */
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
