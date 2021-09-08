import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from '../About/About.js';
import Contacts from '../Contacts/Contacts.js';
import Todo from '../Todo/Todo.jsx';


const App = () => (
    <Router>
        <div>
            <nav>
                <Link to='/'>Обо мне</Link>
                <Link to='/todo'>Дела</Link>
                <Link to='/contacts'>Контакты</Link>
            </nav>
        </div>
        <div>
            <Route path='/' exact component={About} />
            <Route path='/todo' component={Todo} />
            <Route path='/contacts' component={Contacts} />
        </div>
    </Router>
);

export default App;
