import { useLayoutEffect } from 'react';
import {  useLocation } from 'react-router-dom';

export default function ScrolltoTop() {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}