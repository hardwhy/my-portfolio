import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const Typing = (props: { strings: string[] }) => {
  const ref = useRef(null);

  useEffect(() => {
    let typedValues = new Typed(ref.current, {
      strings: props.strings,
      typeSpeed: 100,
      backDelay: 1000,
      backSpeed: 100,
      startDelay: 2000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typedValues.destroy();
    };
  }, []);

  return <span ref={ref} />;
};
