import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Css/>
                <Nav/>
            </div>
        );
    }
}

class Css extends React.Component {
    render() {
        return (
            <head>
                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
        );
    }
}

class Nav extends React.Component {
    render() {
        return(
            <div className="nav">
                <NavItem text={"Shane Clancy"} link={"/"}/>
                <NavIcon/>
            </div>
        );
    }
}

class NavItem extends React.Component {

    render() {
        return (
            <div className="nav-comp">
                <a className="nav-item" href={this.props.link}>{this.props.text}</a>
            </div>
        );
    }
}

class NavIcon extends React.Component {

    render() {
        return (
            <div className="nav-comp">
                <a className="fa fa-github nav-icon" href="https://github.com/shaneclancy"> </a>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);