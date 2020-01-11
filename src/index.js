import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <Nav/>
        );
    }
}

class Nav extends React.Component {
    render() {
        return(
            <div className="nav">
                <NavItem text={"Shane Clancy"} link={"/"}/>
            </div>
        );
    }
}

class NavItem extends React.Component {
    render() {
        return <a className="nav-item" href={this.props.link}>{this.props.text}</a> ;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);