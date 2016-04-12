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
    addTag = (array, value,label) => {

      array.push ( {"label":label.value,"value":value.value} );
        this.props.dispatch(change('tag-editor', 'tags', array));
        this.props.resetForm();
    };

    editTag = (array, value,label) => {
        array[this.selected].label = label.value;
        array[this.selected].value = value.value;
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
                    return (<div key={index} style={{position: 'relative'}}>
                        <ListGroupItem key={index} className="tags" onClick={this.onSelect.bind(this, value.label,value.value,index)} style={{}}>
                            {value.label}
                        </ListGroupItem>
                        <Glyphicon glyph="remove" id="delete-button" onClick={this.removeTag.bind(this, tags, index)} style={{position: 'absolute', zIndex: '2', float:'right'}} />
                    </div>)
            })
        )
    };

    onSelect = (label, value, index) => {
        if (this.selected != index) {
            this.selected = index;
            this.props.dispatch(change('tag-editor', 'val', value));
            this.props.dispatch(change('tag-editor', 'label', label));
        }
        else {
            this.selected = -1;
            this.props.resetForm();
        }


    };

    selected = -1;

    render() {
        let {fields: {tags, val, label}, initialTags, handleSubmit, dispatch, resetForm } = this.props;

        //this.selected.bind(this);

        tags = initialTags;
      //  const addButton = (<Button bsStyle="primary" onClick={this.addTag.bind(this, tags, val, label)}><Glyphicon glyph= "plus" /></Button>);
      //  const editButton = (<Button bsStyle="primary" onClick={this.editTag.bind(this, tags,val, label)}><Glyphicon glyph="edit" /></Button>);

        return (
            <div>
                <ListGroup style={{height: '120px', overflow: 'auto'}}>
                    {this.renderTags(tags)}
                </ListGroup>
                  <Input type="text" label="value" {...val} placeholder={val.value} />
                  <Input type="text"label="label" {...label} placeholder={label.value}/>
                {(this.selected == -1) ?
                  <Button bsStyle="primary" onClick={this.addTag.bind(this, tags, val, label)}><Glyphicon glyph= "plus" /></Button>
                  :<Button bsStyle="primary" onClick={this.editTag.bind(this, tags,val, label)}><Glyphicon glyph="edit" /></Button>
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
