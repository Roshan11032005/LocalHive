import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/NavBar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    
    <RouterProvider router={router}>
     
      {/* Render router outlet */}
    </RouterProvider>
  );
}

export default App;
