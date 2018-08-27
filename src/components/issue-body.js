import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Message, Button } from 'semantic-ui-react';

//Component to show the body text of an issue
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

IssueBody.propTypes = {
  body: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default IssueBody;
