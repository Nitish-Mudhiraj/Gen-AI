import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authcontext from './auth/Authcontext.jsx'
import Chatcontext from './chat/Chatcontext.jsx'


createRoot(document.getElementById('root')).render(

   <Authcontext>
     <Chatcontext>
       <App />
     </Chatcontext>
   </Authcontext>
 
)
