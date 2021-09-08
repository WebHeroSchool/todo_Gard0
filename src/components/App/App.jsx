import React from 'react';
import About from '../About/About.js';
import Contacts from '../Contacts/Contacts.js';
import Todo from '../Todo/Todo.jsx';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';


import styles from './App.module.css';

const App = () => (
    <Router>
        <div className={styles.wrap}>
            <Card className={styles.siedebar}>
                <MenuList>
                    <Link className={styles.link} to='/todo'><MenuItem>Задачи</MenuItem></Link>
                    <Link className={styles.link} to='/contacts'><MenuItem>Контакты</MenuItem></Link>
                    <Link className={styles.link} to='/'><MenuItem>Обо мне</MenuItem></Link>
                </MenuList>
            </Card>
            <Card className={styles.content}>
                <Route path='/todo' component={Todo} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/' exact component={About} />
            </Card>
        </div>
    </Router>
);

export default App;
