import { useEffect } from 'react';

export default function useClickOutside(ref, handler) {
  useEffect(() => {
    const listner = (event) => {
      const el = ref?.current;
      console.log(el);
      console.log(event);
      if (el === event?.path[1]) {
        handler(true);
      } else handler(false);
    };
    document.addEventListener('click', listner);
    return () => {
      document.removeEventListener('click', listner);
    };
  }, [ref]);
}
