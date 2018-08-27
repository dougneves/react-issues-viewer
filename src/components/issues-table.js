import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

import IssuesTableBody from './issues-table-body';

//The table header
const IssuesTable = ({ issues }) => (
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

    {issues.length > 0 && (
      <Table.Body>
        <IssuesTableBody issues={issues} />
      </Table.Body>
    )}
  </Table>
);

IssuesTable.propTypes = {
  issues: PropTypes.array.isRequired
};

export default IssuesTable;
