var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(Counter, {className:'counter'}),
        React.createElement(Counter,{className:'counter'}),
        React.createElement(Counter,{className:'counter'})
      )
    );
  }
});

