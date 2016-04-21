/**
 * Created by parikhv on 4/10/16.
 */
import React, { Component } from 'react';
import { Input } from 'react-bootstrap';


/**
 * This class represents the editor dropdown option for bsSize', 'bsStyle', 'ComponentWidth', 'alignment' for the compnent properties
 */

export default class EditList extends Component {

/**
 *  EditList dropdown UI render method
*/
    render() {
        let { value, name, options, onChange } = this.props;
        const parse = event => {
            return {value: {value: event.target.value, options}};
        };

        return (
            <Input type="select" label={name} defaultValue={value} onChange={event => onChange(parse(event))} >
                {options.map((opt, optKey) => {
                    return ( <option value={opt} key={optKey} >{opt}</option>);
                })}
            </Input>
        );
    }
}
