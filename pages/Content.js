import React, { Component } from 'react';
import { Tabs, Tab, Button, Intent, Spinner } from '@blueprintjs/core';

class Content extends Component {

  render() {
    return (
      <Tabs animate vertical key='vertical'>
        <Tab id='1' title={<Button minimal>test1</Button>} panel={<p>Welcome next!!</p>}/>
        <Tab id='2' title='test2' panel={<Spinner intent={Intent.PRIMARY} />}/>
        <Tab id='3' title='test3' panel={<Button icon='refresh' intent="success" text="button content" />}/>
        <Tab id='4' title='test4' />
      </Tabs>
    );
  }
}

export default Content;

