import { useEffect, useRef } from 'react';

export default function CheckOutsideClick({ onClickOutside, children }) {
  const ref = useRef(null);
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClickOutside && onClickOutside();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  }, []);
  if (!children) return null;
  return <div ref={ref}>{children}</div>;
}
