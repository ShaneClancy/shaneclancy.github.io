import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Css/>
                <Nav/>
                <Content/>
            </div>
        );
    }
}

class Css extends React.Component {
    render() {
        return (
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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

class Content extends React.Component {
    render() {
        return (
            <div className="main-content">
                <InfoCard />
                <ProjectsCard />
                <CardContact />
            </div>
        );
    }
}

class InfoCard extends React.Component {
    render() {
        return ( 
            <div className="card">
                <div className="card-header">
                    <p className="card-header-text">About Me</p>
                </div>
                <div className="card-content">
                    <p className="card-content-text">My name is Shane Clancy, I am currently a senior Computer Science major and Mathematics minor at Oregon State University. 
                    My main focuses are systems, machine learning, mathematical and statistical problem solving, and full stack development. 
                    I currently am a developer at the Oregon State University Graduate School, and work on the Salesforce platform. 
                    Our goal as student developers is to maintain the current codebase and solve issues, while also working on new projects that will digitalize and automatre current services that the Graduate School provides.</p>
                </div>
            </div>
        );
    }
}

class ProjectsCard extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <p className="card-header-text">Projects</p>
                </div>
                <div className="card-content-flex">
                    <CardAccordion title={"Gesture Recognition using Intel Real Sense SR305 Camera"} link={"https://github.com/CS-33-Gesture-Recognition/Capstone"} text={"This is a current project that focuses on developing a system that will be able to recognize american sign language gestures and produce translations into text in real time. The system will use an Intel RealSense depth camera (SR305) that uses coded light technology, machine learning algorithms for classification, a database and a graphical interface. I have personally contributed work to the development of data processing, the interconnectivity of the processes, and developing and convolutional neural network for classification of gestures."}/>
                    <CardAccordion title={"Weather Visualization"} link={"https://github.com/olsencar/the-weathermen"} text={"This project I worked on in a small team in which the goal was to display weather information for cities within the United States in unique ways. User can make queries over the data to from a front-end websiteto match certain ranges, such as state, city, months of the year, average high/low temperatures, and rainfall. We used the Google maps API to display the cities that matched the users queries and gave each result its specific page with a 5 day forecast as well as all of the months of the year that had matched the user query."}/>
                    <CardAccordion title={"Sudoku"} link={"https://github.com/ShaneClancy/sudoku"} text={"A web based implementation of Sudoku that I have done in order to teach myself the basics of a component based website in React. This project helped me develop front end building skills as well as board population back end logic."}/>
                    <CardAccordion title={"Pseudoknot Detection in RNA Secondary Structures"} link={""} text={"Used KNN algorithm to detect Pseudoknots in RNA strands. We did data preprocessing to train the model on an equal set of RNA sequences that contained and didnt contain a Pseudoknot. This model achieved a high accuracy 90%+ when tested against a random set of RNA sequences."}/>
                </div>
            </div>
        );
    }
}

class CardAccordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hidden: true }; 
    }
    
    activateAccordion = () => {
        this.setState( { hidden: !this.state.hidden })
    }

    render() {
        let classListButton = 'card-accordion';
        let classListP = 'card-accordion-content';
        if (this.state.hidden === true) {
            classListP += ' hidden';
        } else if (this.state.hidden === false) {
            classListButton += ' active';
        }
        let linkTo;
        if (this.props.link.length !== 0) {
            linkTo = <a className="link-elem" href={this.props.link}>Link To This Project</a>;
        }

        return ( 
            <div>
                <button className={classListButton} onClick={this.activateAccordion}>{this.props.title}</button>
                <p className={classListP}>{this.props.text}<br></br>{linkTo}</p>
            </div>
        );
    }
}

class CardContact extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <p className="card-header-text">Contact Me</p>
                </div>
                <div className="card-content">
                    <p className="card-content-text">If you wish to contact me, more information is available on my <a className="link-elem" href="https://github.com/shaneclancy">Github</a>, including my Resume. If you would like to contact me directly. The best email to reach me is <a href="mailto:clancys@oregonstate.edu.">Here</a></p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
