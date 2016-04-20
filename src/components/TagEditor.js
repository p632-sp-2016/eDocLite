import React, { Component, PropTypes } from 'react';
import {reduxForm, change} from 'redux-form';
import { connect } from 'react-redux';
import EditForm from './EditForm';
import { Input, Button, Glyphicon, ListGroup, ListGroupItem } from 'react-bootstrap';

/**
 * This class represents the container for editor panel redux form. It generates form for editing compnent properties dynamically.
 */
export default class TagEditor extends Component {
    selected = -1;
    render() {
        let {fields: {tags, val, label}, initialTags, handleSubmit, dispatch, resetForm } = this.props;
        tags = initialTags;

        const addTag = (array, value,label) => {
          array.push ( {"label":label.value,"value":value.value} );
            dispatch(change('tag-editor', 'tags', array));
            resetForm();
        };

        const editTag = (array, value,label) => {
            array[this.selected].label = label.value;
            array[this.selected].value = value.value;
            dispatch(change('tag-editor', 'tags', array));
            resetForm();
            this.selected = -1;
        };

        const removeTag = (array, index) => {
            array.splice(index, 1);
            dispatch(change('tag-editor', 'tags', array));
        };

        const renderTags = (tags) => {
            return (
                tags.map((value, index) => {
                        return (<div key={index} style={{position: 'relative'}}>
                            <ListGroupItem key={index} className="tags" onClick={onSelect.bind(this, value.label,value.value,index)} style={{}}>
                                {value.label}
                            </ListGroupItem>
                            <Glyphicon glyph="remove" id="delete-button" onClick={removeTag.bind(this, tags, index)} style={{position: 'absolute', zIndex: '2', float:'right'}} />
                        </div>);
                })
            )
        };

        const onSelect = (label, value, index) => {
            if (this.selected != index) {
                this.selected = index;
                dispatch(change('tag-editor', 'val', value));
                dispatch(change('tag-editor', 'label', label));
            }
            else {
                this.selected = -1;
                resetForm();
            }
        };

        return (
            <div>
                <ListGroup style={{height: '120px', overflow: 'auto'}}>
                    {renderTags(tags)}
                </ListGroup>
                  <Input type="text" label="value" {...val} placeholder={val.value} />
                  <Input type="text"label="label" {...label} placeholder={label.value}/>
                {(this.selected == -1) ?
                  <Button bsStyle="primary" onClick={addTag.bind(this, tags, val, label)}><Glyphicon glyph= "plus" /></Button>
                  :<Button bsStyle="primary" onClick={editTag.bind(this, tags,val, label)}><Glyphicon glyph="edit" /></Button>
                }

            </div>
        );
    }
}

TagEditor.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired
};
/**
 * Returns the selected component and selected component id
 */
TagEditor = reduxForm({form: 'tag-editor'})(TagEditor);


export default TagEditor;
