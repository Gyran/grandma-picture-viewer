import React from 'react';
import {
  compose,
  withState,
  withHandlers,
  lifecycle,
  withPropsOnChange,
} from 'recompose';

const enhance = compose(
  withState('images', 'setImages', []),
  withState('currentImageIndex', 'setCurrentImageIndex', 0),
  withPropsOnChange(['images'], ({ images }) => {
    return {
      numImages: images.length,
    };
  }),
  withHandlers({
    handlePrevClick: ({ numImages, currentImageIndex, setCurrentImageIndex }) => () => {
      if (currentImageIndex === 0) {
        setCurrentImageIndex(numImages - 1);
      } else {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    },
    handleNextClick: ({ numImages, currentImageIndex, setCurrentImageIndex }) => () => {
      setCurrentImageIndex((currentImageIndex + 1) % numImages);
    },
  }),
  lifecycle({
    componentDidMount() {
      fetch('/images')
        .then((response) => response.json())
        .then((images) => {
          this.props.setImages(images);
        });
    },
  })
);

const WIDTH = 1366;
const HEIGHT = 1024;

const HEADER_HEIGHT = 50;
const IMAGE_HEIGHT = HEIGHT - HEADER_HEIGHT;

const styles = {
  image: {
    position: 'absolute',
    top: `${ HEADER_HEIGHT }px`,
    left: 0,
    width: `${ WIDTH }px`,
    height: `${ IMAGE_HEIGHT }px`,
  },
  leftButton: {
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    width: `${ WIDTH / 2 }px`,
    height: `${ HEIGHT }px`,
  },
  rightButton: {
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 0,
    width: `${ WIDTH / 2 }px`,
    height: `${ HEIGHT }px`,
  },
  header: {
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '40px',
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: HEADER_HEIGHT,
    width: `${ WIDTH }px`,
  },
};

const LeftButton = () => {
  return
};

const App = enhance(({
  images,
  currentImageIndex,
  handlePrevClick,
  handleNextClick,
}) => {
  const image = images[currentImageIndex];

  if (!image) {
    return null;
  }

  const {
    path,
    title,
    message,
  } = image;

  return (
    <div>
      { image && 
        <div>
          <img
            style={ styles.image }
            src={ image.path }
          />
          <a onClick={ handlePrevClick } style={ styles.leftButton } />
          <a onClick={ handleNextClick } style={ styles.rightButton } />
          <div style={ styles.header }>
            <b>{ title }</b> - { message }
          </div>
        </div>

      }
    </div>
  );
});

export default App;
