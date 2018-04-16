var Counter2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'btn-box'},
            React.createElement('span', {}, '#2 Licznik ' + this.state.counter),
            React.createElement('button', {className: 'btn-in', onClick: this.increment}, 'Increase '),
            React.createElement('button', {className: 'btn-de', onClick: this.decrement}, 'Decrease ')
        );
    }
});
