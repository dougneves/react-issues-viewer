import React, { Fragment } from 'react';
import {
  Table,
  Label,
  Button,
  Icon,
  TextArea,
  Message
} from 'semantic-ui-react';
import { textColorForBackground } from '../utils';

const renderLabels = labels =>
  labels.map((label, index) => (
    <Label
      key={index}
      style={{
        backgroundColor: '#' + label.color,
        color: textColorForBackground(label.color)
      }}
    >
      {label.name}
    </Label>
  ));

const renderTableBody = issues =>
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
          <Table.Cell>{renderLabels(issue.labels)}</Table.Cell>
          <Table.Cell>
            <Label color={issue.state === 'open' ? 'green' : 'red'}>
              {issue.state}
            </Label>
          </Table.Cell>
        </Table.Row>
        {body && (
          <Table.Row style={{ backgroundColor }}>
            <Table.Cell colSpan={5}>
              <Message style={{ wordBreak: 'break-word' }}>
                {body
                  .split('\n')
                  .map((line, index) => <p key={index}>{line}</p>)}
              </Message>
            </Table.Cell>
          </Table.Row>
        )}
      </Fragment>
    );
  });

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
    <Table.Body>{renderTableBody(issues)}</Table.Body>
  </Table>
);
