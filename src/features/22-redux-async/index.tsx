import React from 'react';

import AsyncCounterUsingSaga from './containers/AsyncCounterUsingSaga';

class ReduxAsync extends React.Component {
  render() {
    return (
      <div>
        <h3>ReduxAsync</h3>
        <AsyncCounterUsingSaga />
      </div>
    );
  }
}

export default ReduxAsync;
