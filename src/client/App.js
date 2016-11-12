import React from 'react';
import { compose, withState, lifecycle } from 'recompose';

const enhance = compose(
  withState('images', 'setImages', []),
  lifecycle({
    componentDidMount()
  })
);

const App = enhance(() => {
  return (
    <div>
      Jao!
    </div>
  );
});

export default App;
