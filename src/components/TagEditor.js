import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import {reduxForm, change} from 'redux-form';
import { connect } from 'react-redux';
import EditForm from './EditForm';
import { Input, Button, Glyphicon, ListGroup, ListGroupItem } from 'react-bootstrap';

/**
 * This class represents the container for editor panel redux form. It generates form for editing compnent properties dynamically.
 */
export default class TagEditor extends Component {
    /**
     * This function represents the UI render method for the EditFormContainer Class
     */
    addTag = (array, text) => {
        array.push(text.value);
        this.props.dispatch(change('tag-editor', 'tags', array));
        this.props.resetForm();
    };

    editTag = (array, text) => {
        array[this.selected] = text.value;
        this.props.dispatch(change('tag-editor', 'tags', array));
        this.props.resetForm();
        this.selected = -1;
    };

    removeTag = (array, index) => {
        array.splice(index, 1);
        this.props.dispatch(change('tag-editor', 'tags', array));
    };

    renderTags = (tags) => {
        return (
            tags.map((value, index) => {
                    return (<div style={{position: 'relative'}}>
                        <ListGroupItem key={index} class="tags" onClick={this.onSelect.bind(this, value, index)} style={{}}>
                            {value}
                        </ListGroupItem>
                        <Glyphicon glyph="remove" id="delete-button" onClick={this.removeTag.bind(this, tags, index)} style={{position: 'absolute', zIndex: '2', float:'right'}} />
                    </div>)
            })
        )
    };

    onSelect = (value, index) => {
        if (this.selected != index) {
            this.selected = index;
            this.props.dispatch(change('tag-editor', 'val', value));
        }
        else {
            this.selected = -1;
            this.props.resetForm();
        }


    };

    selected = -1;

    render() {
        let {fields: {tags, val}, initialTags, handleSubmit, dispatch, resetForm } = this.props;

        //this.selected.bind(this);

        tags = initialTags;

        const addButton = (<Button bsStyle="primary" onClick={this.addTag.bind(this, tags, val)}><Glyphicon glyph="plus" /></Button>);
        const editButton = (<Button bsStyle="primary" onClick={this.editTag.bind(this, tags, val)}><Glyphicon glyph="edit" /></Button>);

        return (
            <div>
                <ListGroup style={{height: '120px', overflow: 'auto'}}>
                    {this.renderTags(tags)}
                </ListGroup>

                <Input type="text" {...val} placeholder={val.value} buttonAfter={this.selected == -1 ? addButton : editButton} />
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
