import Head from 'next/head';
import Navigation from './Navigation';
import Timeline from './Timeline';
import Content from './Content';

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
      <Navigation />
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{order: 1, width: '200px'}}><Timeline /></div>
        <div style={{order: 2, width: '100%'}}><Content /></div>
      </div>
    </body>
  </div>
