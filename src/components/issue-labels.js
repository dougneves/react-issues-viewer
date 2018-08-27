import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

import { textColorForBackground } from '../utils';

//Render the labels, using the color provided by github api
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
