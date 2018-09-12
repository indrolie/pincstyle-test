import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react'

import MyModal from '../Modal'
import MyLoginForm from '../Login'
import ShowUsers from '../Users'

import './index.css';

class App extends Component {
  render() {
    const panes = [
      { menuItem: 'Test A', render: () => <Tab.Pane className='pane' ><MyModal /></Tab.Pane> },
      { menuItem: 'Test B', render: () => <Tab.Pane className='pane' ><MyLoginForm /></Tab.Pane> },
      { menuItem: 'Test C', render: () => <Tab.Pane className='pane' ><ShowUsers /></Tab.Pane> },
    ]

    return (
      <div className='container'>
        <Tab panes={panes} className='panes'/>
      </div>
    );
  }
}

export default App;
