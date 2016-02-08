var ContactForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired,
  },

  onNameInput: function(e) {
    this.props.actions.onChange(Object.assign({}, this.props.value, {name: e.target.value}))
  },

  onEmailInput: function(e) {
    this.props.actions.onChange(Object.assign({}, this.props.value, {email: e.target.value}))
  },

  onDescriptionInput: function(e) {
    this.props.actions.onChange(Object.assign({}, this.props.value, {description: e.target.value}))
  },

  onSubmit: function(e) {
    e.preventDefault()
    this.props.actions.onSubmit()
  },

  render: function() {
    var errors = this.props.value.errors || {}

    return (
      React.createElement('form', {onSubmit: this.onSubmit, className: 'ContactForm', noValidate: true},
        React.createElement('input', {
          type: 'text',
          className: errors.name && 'ContactForm-error',
          placeholder: 'Name',
          onChange: this.onNameInput,
          value: this.props.value.name,
          ref: 'name',
        }),
        React.createElement('input', {
          type: 'email',
          className: errors.email && 'ContactForm-error',
          placeholder: 'Email',
          onChange: this.onEmailInput,
          value: this.props.value.email,
          noValidate: true,
        }),
        React.createElement('button', {type: 'submit'}, "Submit")
      )
    )
  },
});
