
import { Routes } from './auth/Routes'
import { RouterProvider } from 'react-router-dom'

import { useAuth } from './auth/Hooks/useAuth'
import { useEffect } from 'react'
const App = () => {


const auth = useAuth()

useEffect(()=>{
auth.handlegetme()
},[])

  return (
   
    
      <RouterProvider router={Routes}/>

   
  )
}

export default App