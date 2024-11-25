import React from 'react';
import { useModal } from '../modal';
import LoginModal from '../auth/login-modal';
import { useAuth } from '../auth';

function ProtectedRoute({ children }) {
  const { openModal } = useModal();
  const { user } = useAuth();

  React.useEffect(() => {
    if (!user) {
      openModal(close => <LoginModal onReqClose={close} />);
    }
  }, [openModal, user]);

  if (!user) {
    return <div>You must be logged in to view this page</div>;
  }
  
  return children;
}

export default ProtectedRoute;
