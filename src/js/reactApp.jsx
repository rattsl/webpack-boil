  import ReactDOM from 'react-dom';
  import * as React from 'react';

  const App = (props) => {
    return(
      <div>this is react componemt</div>
    );
  };

  const reactRoot = document.getElementById('react-root');

  if (reactRoot) {
    ReactDOM.render(<App />, reactRoot)
  } else {
    console.log('element not found');
  }