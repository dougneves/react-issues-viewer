import React, { Component } from 'react';

import { Table, Message, Button } from 'semantic-ui-react';

class IssueBody extends Component {
  state = { opened: false };

  handleButtonClick = e => {
    this.setState({ opened: !this.state.opened });
  };

  renderText = body => {
    if (this.state.opened) {
      return (
        <Message style={{ wordBreak: 'break-word' }}>
          {body.split('\n').map((line, index) => <p key={index}>{line}</p>)}
          <Button onClick={this.handleButtonClick}>Hide issue body text</Button>
        </Message>
      );
    } else
      return (
        <Button onClick={this.handleButtonClick}>Show issue body text</Button>
      );
  };

  render = () => {
    const { body, backgroundColor } = this.props;

    return (
      <Table.Row style={{ backgroundColor }}>
        <Table.Cell colSpan={5}>{this.renderText(body)}</Table.Cell>
      </Table.Row>
    );
  };
}

export default IssueBody;
