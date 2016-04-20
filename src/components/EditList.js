/**
 * Created by parikhv on 4/10/16.
 */
import React, { Component } from 'react';
import { Input } from 'react-bootstrap';

export default class EditList extends Component {

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
