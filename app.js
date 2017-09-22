import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
  	return (
  		<div>Peter & Marcus are the best BFF</div>
  	)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
