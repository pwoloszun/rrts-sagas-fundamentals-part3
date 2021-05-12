import React from 'react';

// import ClassicAsyncCounterUsingSaga from './containers/ClassicAsyncCounterUsingSaga';
import AsyncCounterUsingSaga from './containers/AsyncCounterUsingSaga/index';

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
