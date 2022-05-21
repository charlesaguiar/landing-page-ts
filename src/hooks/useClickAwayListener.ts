import { useEffect, RefObject } from 'react';

function useClickAwayListener<T extends HTMLElement>(
  ref: RefObject<T>,
  onClickOutside: () => void,
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export default useClickAwayListener;
