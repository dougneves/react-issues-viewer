import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import IssueBody from './issue-body';
import IssueRow from './issue-row';

const IssueTableBody = ({ issues }) =>
  issues.map((issue, index) => {
    const { body } = issue;
    const backgroundColor = index % 2 ? '#eee' : '#fff';
    return (
      <Fragment key={index}>
        <IssueRow
          issue={issue}
          backgroundColor={backgroundColor}
          index={index}
        />
        {body && <IssueBody body={body} backgroundColor={backgroundColor} />}
      </Fragment>
    );
  });

IssueTableBody.propTypes = {
  issues: PropTypes.array.isRequired
};

export default IssueTableBody;
