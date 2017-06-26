import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

class Main extends React.Component {
    render() {
        return <h1>&lt;Main/&gt;! <Link to="/contact">go to contact</Link></h1>;
    }
}

class Contact extends React.Component {
    render() {
        return <h1>Contact us at contact@example.com <Link to="/">go to home</Link></h1>;
    }
}

class NotFound extends React.Component {
    render() {
        return <h1>404</h1>;
    }
}

class Template extends React.Component {
    render() {
        return <div>
            <h1>App</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            {this.props.children}
        </div>
    }
}

class App extends React.Component {
    render() {
        return <Router history={hashHistory}>
            <Route path='/' component={Template}>
                <IndexRoute component={Main} />
                <Route path='/contact' component={Contact} />
                <Route path='*' component={NotFound} />
            </Route>
        </Router>;
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
