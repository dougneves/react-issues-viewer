import React from 'react';
import { Label } from 'semantic-ui-react';

import { textColorForBackground } from '../utils';

export default ({ labels }) =>
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
