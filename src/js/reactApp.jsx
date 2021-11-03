  import ReactDOM from 'react-dom';
  import * as React from 'react';

  import Alert from'./Alert.tsx';

  const App = (props) => {
    return(
      <div>
        <div>this is react componemt</div>
        <Alert message="warning!!!!!" />
      </div>
    );
  };

  const reactRoot = document.getElementById('react-root');

  if (reactRoot) {
    ReactDOM.render(<App />, reactRoot)
  } else {
    console.log('element not found');
  }