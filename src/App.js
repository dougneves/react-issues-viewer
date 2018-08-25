import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { issues: [] };

  componentDidMount = () => {
    const errorMessage = 'Error fetching github data';
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(response => {
        if (!response || !response.ok) {
          return window.alert(errorMessage);
        }
        return response.json();
      })
      .then(issues => {
        if (!Array.isArray(issues)) return window.alert(errorMessage);
        console.log(issues);
        this.setState({ issues });
      })
      .catch(function(err) {
        return window.alert(errorMessage + ': ' + err.message);
      });
  };

  render = () => {
    return (
      <Fragment>
        <ul>{this.state.issues.map(issue => <li>{issue.number}</li>)}</ul>
      </Fragment>
    );
  };
}

export default App;
