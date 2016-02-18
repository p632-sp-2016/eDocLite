var NotFoundView = React.createClass({
  propTypes: {},

  render: function() {
    return (
      React.createElement('div', {className: 'NotFoundView'},
        React.createElement('h1', {className: 'NotFoundView-title'}, 'Not Found'),
        React.createElement(Link, {location: {name: 'listContacts'}}, 'View contacts')
      )
    )
  },
});
