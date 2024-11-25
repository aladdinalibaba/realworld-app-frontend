import React from 'react';
import ReactModal from 'react-modal';
import modalCtx from './context';

ReactModal.setAppElement(document.body);

function ModalProvider({ children }) {
  const [modal, setModal] = React.useState();

  const closeModal = () => setModal(null);

  const openModal = React.useCallback(
    (callback) => {
      setModal(callback(closeModal));
    },
    []
  );

  React.useEffect(() => document.body.removeAttribute('aria-hidden'));

  return (
    <modalCtx.Provider value={{
      openModal, closeModal
    }}>
      {children}
      <ReactModal
        isOpen={!!modal}
        onRequestClose={closeModal}
        className='react-modal__content'
        overlayClassName='react-modal__backdrop'
      >
        {modal}
      </ReactModal>
    </modalCtx.Provider>
  );
}

export default ModalProvider;
