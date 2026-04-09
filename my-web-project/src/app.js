// This file contains the main application logic. It sets up the application structure and manages the rendering of components.

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

const App = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to My Web Project</h1>
            <p>This is the main application content.</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));