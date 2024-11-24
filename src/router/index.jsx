import { createBrowserRouter } from 'react-router-dom';
import Root from '../root';
import home from './home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      home,
    ]
  }
]);

export default router;
