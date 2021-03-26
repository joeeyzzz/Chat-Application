import React from  'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (

    <Router>

        <Route path = "/" exact component = {Join} />        
        <Route path = "/chat" exact component = {Chat} />    
    </Router>
);

export default App;

//El usuario cuando accede a nuestra app debe dar sus datos en el login
//Pasaremos esos datos a través de chat 