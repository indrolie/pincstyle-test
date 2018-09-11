import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react'

import MyModal from '../Modal'
import MyLoginForm from '../Login'
import ShowUsers from '../Users'

import './index.css';

class App extends Component {
  render() {
    const panes = [
      { menuItem: 'Test A', render: () => <Tab.Pane><MyModal /></Tab.Pane> },
      { menuItem: 'Test B', render: () => <Tab.Pane><MyLoginForm /></Tab.Pane> },
      { menuItem: 'Test C', render: () => <Tab.Pane><ShowUsers /></Tab.Pane> },
    ]

    return (
      <Tab panes={panes} />
    );
  }
}

export default App;
