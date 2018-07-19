import { Button, Intent, Spinner } from '@blueprintjs/core';

export default () =>
  <div>
        <p>Welcome next!</p>
        <Spinner intent={Intent.PRIMARY} />
        <Button icon='refresh' intent="success" text="button content" />
  </div>
