import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Accueil from './pages/Accueil.jsx'
import Contact from './pages/Contact.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Accueil />, // Route par défaut
    },
      {
        path: "contact",
        element: <Contact />, // Route pour "Contact"
      },
    
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
