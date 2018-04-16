var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(Counter1, {className:'counter1'}),
        React.createElement(Counter2,{className:'counter2'}),
        React.createElement(Counter3,{className:'counter3'})
      )
    );
  }
});

