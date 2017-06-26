import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

const users = [
    {id: 1, name: "Marcin"},
    {id: 2, name: "Marek"},
    {id: 3, name: "Ewa"}
]

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
        const usersList = this.props.route.users.map(u => {
            return <li key={u.id}><IndexLink activeClassName="active" activeStyle={ {backgroundColor: "red"} } to={"/users/" + u.id}>{u.name}</IndexLink></li>
        });

        return <div>
            <h1>App</h1>
            <ul>
                <li>
                    <IndexLink activeClassName="active" activeStyle={ {backgroundColor: "red"} } to="/">Home</IndexLink>
                </li>
                <li>
                    <IndexLink activeClassName="active"  activeStyle={ {backgroundColor: "red"} } to="/contact">Contact</IndexLink>
                </li>
                <li>Users!
                    <ul>
                        {usersList}
                    </ul>
                </li>
            </ul>
            {this.props.children}
        </div>
    }
}

class UserInfo extends React.Component {

    render() {
        const user = this.props.route.users.filter(u => {
            return u.id == this.props.params.id;
        });

        console.log(user[0]);

        return <h1>
            Info about User with ID:
            {this.props.params.id}, 
            name: {user[0].name}
        </h1>;
    }
}

class App extends React.Component {
    render() {
        return <Router history={hashHistory}>
            <Route path='/' component={Template} users={this.props.users}>
                <IndexRoute component={Main} />
                <Route path='/contact' component={Contact} />
                <Route path='/users/:id' component={UserInfo} users={this.props.users} />} />
                <Route path='*' component={NotFound} />
            </Route>
        </Router>;
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App users={users}/>,
        document.getElementById('app')
    );
});
