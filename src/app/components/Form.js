/**
 * Created by parikhv on 1/31/16.
 */


import React from 'react';
import styles from '../../client/styles/styles.less';
import { Button, Input } from 'react-bootstrap';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Form extends React.Component {

  constructor () {
      super();
      this.state = {
          username: ''
      };
  }

    shouldComponentUpdate() {
        return PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }




    render () {
        return <div className="input-group">
            <Input type="text" label="Username" name="username" placeholder="Enter Username..." addonAfter="@edl.com" />
            <Button bsStyle="primary">My Button</Button>
            <p>{this.state.username}</p>
        </div>;
    }

    handleChange (e) {
        if (e.key === 'Enter') {
            //console.log(e.target.value);
            this.setState({username:e.target.value+"@edl.com"});
        }
    }
}

//Form.propTypes = {
//    state: React.PropTypes.object.isRequired
//};

module.exports =  Form;
