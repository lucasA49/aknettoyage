import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Formulaire from './pages/Formulaire.jsx'
import Accueil from './pages/Accueil.jsx'
import Contact from './pages/Contact.jsx'
import Mobilier from './pages/Mobilier.jsx'
import Exterieur from './pages/Exterieur.jsx'
import Interieur from './pages/Interieur.jsx'
import LegalM from './pages/LegalM.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Accueil />, // Route par défaut
    },
      {
        path: "contact",
        element: <Contact />, // Route pour "Contact"
      },
      {
      path: "Mobilier",
      element: <Mobilier />, // Route pour "Contact"
    },

    {
      path: "NéttoyageIntérieur",
      element: <Interieur />, // Route pour "Contact"
    },
    {
      path: "Néttoyageextérieur",
      element: <Exterieur />, // Route pour "Contact"
    },
{
  path:"formu",
  element:<Formulaire/>
},
{
  path:"MentionLégales",
  element:<LegalM/>
}
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
