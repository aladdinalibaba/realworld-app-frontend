import { createBrowserRouter } from 'react-router-dom';
import Root from '../root';
import home from './home';
import settings from './settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      home,
      settings,
    ]
  }
]);

export default router;
