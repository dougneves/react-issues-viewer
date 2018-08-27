import React, { Fragment } from 'react';
import { Table } from 'semantic-ui-react';

import IssuesTableBody from './issues-table-body';

export default ({ issues }) => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>Issue Number</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Created At</Table.HeaderCell>
        <Table.HeaderCell>Updated At</Table.HeaderCell>
        <Table.HeaderCell>Labels</Table.HeaderCell>
        <Table.HeaderCell>State</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <IssuesTableBody issues={issues} />
    </Table.Body>
  </Table>
);
