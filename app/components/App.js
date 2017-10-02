var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.Browser;
var Route = ReactRouter.Route;
var Nav = require('./Nav');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Route path='/popular' component={Popular} />
                </div>
            </Router>
        )
    }
}

module.exports = App;



