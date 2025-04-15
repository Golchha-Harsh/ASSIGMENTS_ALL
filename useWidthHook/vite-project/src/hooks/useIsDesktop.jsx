import React from 'react'
import useWindowWidth from './useWindowWidth';

export default function useIsDesktop() {
    const width = useWindowWidth();
  return (
    width >= 1024
  )
}
