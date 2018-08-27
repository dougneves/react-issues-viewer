import React from 'react';
import PropTypes from 'prop-types';
import { Table, Icon, Label } from 'semantic-ui-react';

import IssueLabels from './issue-labels';
import { formatDate } from '../utils.js';

const IssueRow = ({ issue, index, backgroundColor }) => {
  const { body, html_url, id, title, labels, state } = issue;
  const created_at = new Date(issue.created_at);
  const updated_at = new Date(issue.updated_at);

  return (
    <Table.Row style={{ backgroundColor }}>
      <Table.Cell rowSpan={body ? 2 : 1}>
        <a href={html_url} target="_new">
          <Icon name="external" link />
        </a>
      </Table.Cell>
      <Table.Cell rowSpan={body ? 2 : 1}>{id + ' '}</Table.Cell>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{formatDate(created_at)}</Table.Cell>
      <Table.Cell>{formatDate(updated_at)}</Table.Cell>
      <Table.Cell>
        <IssueLabels labels={labels} />
      </Table.Cell>
      <Table.Cell>
        <Label color={state === 'open' ? 'green' : 'red'}>{state}</Label>
      </Table.Cell>
    </Table.Row>
  );
};

IssueRow.propTypes = {
  issue: PropTypes.shape({
    body: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    labels: PropTypes.array.isRequired,
    state: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  }),
  index: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default IssueRow;
