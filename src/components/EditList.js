/**
 * Created by parikhv on 4/10/16.
 */
import React, { Component } from 'react';
import { Input } from 'react-bootstrap';

export default class EditList extends Component {

    render() {
        const { value, name, options, onChange,  ...rest } = this.props;

        const parse = event => {
            return {value: {value: event.target.value, options}};
        };

        return (
            <Input type="select" label={name} onChange={event => onChange(parse(event))} >
                {options.map(opt => {
                    return ( <option value={opt}>{opt}</option>)
                })}
            </Input>
        )
    }
}