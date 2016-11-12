import React from 'react';
import { compose, withState, lifecycle } from 'recompose';

const enhance = compose(
  withState('images', 'setImages', []),
  lifecycle({
    componentDidMount() {
      fetch('/images');
    }
  })
);

const App = enhance(({
  images,
}) => {
  return (
    <div>
      {
        images.map((image) => {
          return <div>{ image }</div>;
        })
      }
    </div>
  );
});

export default App;
