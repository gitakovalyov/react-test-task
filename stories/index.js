import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Main from '../src/components/index';

storiesOf('Window', module)
  .add('window', () => (
    <Main />
  ))
  ;