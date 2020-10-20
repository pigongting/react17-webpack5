import React from 'react';
import ReactDOM from 'react-dom';
import { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from '@ice/stark-app';
import App from './App';

if (isInIcestark()) {
  registerAppEnter(() => {
    ReactDOM.render(<App />, getMountNode());
  });
  registerAppLeave(() => {
    ReactDOM.unmountComponentAtNode(getMountNode());
  });
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
}