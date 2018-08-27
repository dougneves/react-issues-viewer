import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

import { textColorForBackground } from '../utils';

const IssueLabels = ({ labels }) =>
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

IssueLabels.propTypes = {
  labels: PropTypes.array.isRequired
};

export default IssueLabels;
