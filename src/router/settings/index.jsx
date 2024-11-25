
import Settings from './settings';
import ProtectedRoute from '../protected-route';

export default {
  path: '/settings',
  element: (
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  )
};
