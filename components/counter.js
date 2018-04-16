var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('getDefaultProps - ustawiamy domyślne wartości propsów');
    },

    getInitialState: function() {
        console.log('getInitialState - ustawiamy początkowy stan komponentu');

        return {
            counter: 0
        };
    },

    componentWillMount: function () {
        console.log('componentWillMount - wywołujemy ją zaraz przed wykonaniem metody render')
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
        console.log('render - komponent zwraca potrzebny do wyświetlenia ReactElement');
        return React.createElement('div', {className: 'btn-box'},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {className: 'btn-in', onClick: this.increment}, 'Increase '),
            React.createElement('button', {className: 'btn-de', onClick: this.decrement}, 'Decrease ')
        );
    },

    componentDidMount: function () {
        console.log('componentDidMount - wywołujemy ją zaraz po zakończeniu render')
    },

    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps - stosujemy, gdy komponent otrzyma nowe propsy')
    },
    
    shouldComponentUpdate: function () {
        console.log('shouldComponentUpdate - stosujemy, gdy zależy nam na otymalizacji naszej aplikacji;  metoda pozwala sprawdzić czy trzeba jeszcze raz przerysować komponent');
        return true;
    },

    
    componentWillUpdate: function () {
        console.log('componentWillUpdate - przygotowujemy się do aktualizacji komponentu')
    },
    
    componentDidUpdate: function () {
        console.log('componentDidUpdate - wykonujemy np. jakieś manipulacje DOM')
    },
    
    componentWillUnmount: function () {
        console.log('componentWillUnmount - komponent jest usuwany z DOM np. odpinamy licznik')
    }
});
