import React from 'react';
import ModalProvider from './provider';
import modalCtx from './context';

function useModal() {
  return React.useContext(modalCtx);
}

export { useModal };

export default ModalProvider;
