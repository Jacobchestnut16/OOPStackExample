import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './src/Login';
import Register from './Register';
import AuctionList from './src/AuctionList';
import Auction from './Auction';

function App() {
    return (
        <Router>
            <Switch>
            <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route exact path="/" component={AuctionList} />
                <Route path="/auction/:id" component={Auction} />
            </Switch>
        </Router>
    );
}

export default App;
