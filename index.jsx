import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

class Main extends React.Component {
    render() {
        return <h1>&lt;Main/&gt;!</h1>;
    }
}

class Contact extends React.Component {
    render() {
        return <h1>Contact us at contact@example.com</h1>;
    }
}

class NotFound extends React.Component {
    render() {
        return <h1>404</h1>;
    }
}

class App extends React.Component {
    render() {
        return <Router history={hashHistory}>
            <Route path='/' component={Main} />
            <Route path='/contact' component={Contact} />
            <Route path='*' component={NotFound} />
        </Router>;
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
