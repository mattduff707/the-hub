import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/loading.json';

const options = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

const Loading = () => {
  return (
    <>
      <Lottie options={options} height={200} width={200} />
    </>
  );
};

export default Loading;
