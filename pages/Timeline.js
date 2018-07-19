import { Slider, Menu, Card } from '@blueprintjs/core';

export default () =>
  <Card>
    <Menu>
      <Menu.Item icon="new-text-box" onClick={this.handleClick} text="New text box" />
      <Menu.Item icon="new-object" onClick={this.handleClick} text="New object" />
      <Menu.Item icon="new-link" onClick={this.handleClick} text="New link" />
      <Menu.Divider />
      <Menu.Item text="Settings..." icon="cog">
          <Menu.Item icon="tick" text="Save on edit" />
          <Menu.Item icon="blank" text="Compile on edit" />
      </Menu.Item>
    </Menu>
    

  </Card>
