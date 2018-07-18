import Head from 'next/head';
import { Navbar, Alignment, Button, Intent, Spinner } from '@blueprintjs/core';

      // <link href="/node_modules/normalize.css/normalize.css" rel="stylesheet" />
      // <link href="/node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css" rel="stylesheet" />
      // <link href="/node_modules/@blueprintjs/core/lib/css/blueprint.css" rel="stylesheet" />

export default () => 
  <div>
    <Head>
      <title>Timeline</title>
      <link href="https://unpkg.com/normalize.css" rel="stylesheet" />
      <link href="https://unpkg.com/@blueprintjs/core/lib/css/blueprint.css" rel="stylesheet" />
      <link href="https://unpkg.com/@blueprintjs/icons/lib/css/blueprint-icons.css" rel="stylesheet" />
    </Head>
    <body>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Blueprint</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
      </Navbar>
      <p>Welcome next!</p>
      <Spinner intent={Intent.PRIMARY} />
      <Button icon='refresh' />
      <Button intent="success" text="button content" />
    </body>
  </div>
