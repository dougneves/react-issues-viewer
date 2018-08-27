import React, { Fragment } from 'react';
import { Table, Icon, Label } from 'semantic-ui-react';

import IssueBody from './issue-body';
import IssueLabels from './issue-labels';

export default ({ issues }) =>
  issues.map((issue, index) => {
    const { body } = issue;
    const backgroundColor = index % 2 ? '#eee' : '#fff';
    return (
      <Fragment key={index}>
        <Table.Row style={{ backgroundColor }}>
          <Table.Cell rowSpan={body ? 2 : 1}>
            <a href={issue.html_url} target="_new">
              <Icon name="external" link />
            </a>
          </Table.Cell>
          <Table.Cell rowSpan={body ? 2 : 1}>{issue.id + ' '}</Table.Cell>
          <Table.Cell>{issue.title}</Table.Cell>
          <Table.Cell>{issue.created_at}</Table.Cell>
          <Table.Cell>{issue.updated_at}</Table.Cell>
          <Table.Cell>
            <IssueLabels labels={issue.labels} />
          </Table.Cell>
          <Table.Cell>
            <Label color={issue.state === 'open' ? 'green' : 'red'}>
              {issue.state}
            </Label>
          </Table.Cell>
        </Table.Row>
        {body && <IssueBody body={body} backgroundColor={backgroundColor} />}
      </Fragment>
    );
  });
