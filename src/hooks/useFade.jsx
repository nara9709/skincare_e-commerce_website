import { useEffect, useState } from 'react';

const useFade = (initial, animation) => {
  const [show, setShow] = useState(initial);
  const [isVisible, setVisible] = useState(show);

  // Update visibility when show changes
  useEffect(() => {
    if (show) setVisible(true);
  }, [show]);

  // When the animation finishes, set visibility to false
  const onAnimationEnd = () => {
    if (!show) setVisible(false);
  };

  const style = { animation: `${animation} 1.5s` };

  // These props go on the fading DOM element
  const fadeProps = {
    style,
    onAnimationEnd,
  };

  return [isVisible, setShow, fadeProps];
};

export default useFade;
