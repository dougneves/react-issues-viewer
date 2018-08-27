import React, { Component, Fragment } from 'react';
import { Pagination, Container, Icon, Message } from 'semantic-ui-react';

import { fetchIssues } from './utils';
import IssueTable from './components/issues-table';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  state = { pages: [], loading: false, currentPage: 1, totalPages: 1 };

  componentDidMount = () => {
    this.fetchMoreItens(this.state.currentPage);
  };

  fetchMoreItens = page => {
    this.setState({ loading: true });
    fetchIssues(page, 10).then(issues => {
      if (!Array.isArray(issues)) {
        this.setState({
          loading: false
        });
        return window.alert(
          'Error fetching issues: Unexpected response value.'
        );
      }
      if (issues.length > 0) {
        this.setState({
          loading: false,
          pages: [...this.state.pages, issues],
          currentPage: page,
          totalPages:
            issues.length === 10
              ? this.state.totalPages + 1
              : this.state.totalPages
        });
      }
    });
  };

  handlePaginationChange = (e, { activePage }) => {
    if (activePage > this.state.pages.length) {
      return this.fetchMoreItens(activePage);
    }
    this.setState({ currentPage: activePage });
  };

  render = () => {
    const issues = Array.isArray(this.state.pages[this.state.currentPage - 1])
      ? this.state.pages[this.state.currentPage - 1]
      : [];
    return (
      <Container>
        <Pagination
          defaultActivePage={this.state.currentPage}
          activePage={this.state.currentPage}
          totalPages={this.state.totalPages}
          onPageChange={this.handlePaginationChange}
        />
        {this.state.loading && <Icon loading name="spinner" size="large" />}

        <IssueTable issues={issues} />

        <Pagination
          defaultActivePage={this.state.currentPage}
          activePage={this.state.currentPage}
          totalPages={this.state.totalPages}
          onPageChange={this.handlePaginationChange}
        />
        {this.state.loading && <Icon loading name="certificate" />}
      </Container>
    );
  };
}

export default App;
