import React from 'react';
import Tooltip from 'antd/es/tooltip';
import 'antd/es/tooltip/style/css';
import { Command } from 'gg-editor';

import { upperFirst } from '../../../utils';

import IconFont from '../../../common/IconFont';

const ToolbarButton = (props) => {
  const { command, icon, text } = props;

  return (
    <Command name={command}>
      <Tooltip title={text || upperFirst(command)} placement='bottom'>
        <IconFont type={`icon-${icon || command}`} />
      </Tooltip>
    </Command>
  );
};

export default ToolbarButton;
