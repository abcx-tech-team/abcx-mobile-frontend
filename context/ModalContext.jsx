import { createContext, useContext, useRef, useState } from 'react';
import Confirmation from '../components/modals/ConfirmationModal';

const ConfirmationContext = createContext();
export const useConfirmation = () => useContext(ConfirmationContext);

export const ConfirmationProvider = ({ children }) => {
  const [confirmationState, setConfirmationState] = useState(null);

  const awaitingPromiseRef = useRef();

  const openConfirmation = (options) => {
    setConfirmationState(options);
    return new Promise((resolve, reject) => {
      awaitingPromiseRef.current = { resolve, reject };
    });
  };

  const handleClose = () => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.reject();
    }

    setConfirmationState(null);
  };

  const handleSubmit = (data) => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.resolve(data);
    }

    setConfirmationState(null);
  };

  return (
    <>
      <ConfirmationContext.Provider value={openConfirmation}>
        {children}
      </ConfirmationContext.Provider>

      {confirmationState ? (
        <Confirmation
          open={Boolean(confirmationState)}
          onSubmit={handleSubmit}
          onClose={handleClose}
          {...confirmationState}
        />
      ) : null}
    </>
  );
};
