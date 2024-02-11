import { Theme } from '@radix-ui/themes';

import Router from './router/router';
import '@radix-ui/themes/styles.css';

function App() {
  return (
    <Theme>
      <Router />
    </Theme>
  );
}

export default App;
