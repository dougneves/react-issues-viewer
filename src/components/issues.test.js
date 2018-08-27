import React from 'react';
import ReactDOM from 'react-dom';

import IssueBody from './issue-body';
import IssueLabels from './issue-labels';
import IssueRow from './issue-row';
import IssuesTableBody from './issues-table-body';
import IssuesTable from './issues-table';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <table>
      <tbody>
        <IssueBody body="test" backgroundColor="ffffff" />
      </tbody>
    </table>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IssueLabels labels={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <table>
      <tbody>
        <IssueRow
          issue={{
            body: 'hello body',
            html_url: 'http://test',
            id: 1,
            title: 'hello title',
            labels: [],
            state: 'open',
            created_at: new Date().toString(),
            updated_at: new Date().toString()
          }}
          index={1}
          backgroundColor="aaaaaa"
        />
      </tbody>
    </table>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <table>
      <tbody>
        <IssuesTableBody issues={[]} />
      </tbody>
    </table>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IssuesTable issues={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
