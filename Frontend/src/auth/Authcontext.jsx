  import React, { createContext, useState } from 'react'
  export const DataContext = createContext()
  const Authcontext = ({children}) => {

      const [userr , setuser] = useState(null)

      const [loading, setLoading] = useState(true)

    return (
      <DataContext.Provider value={{loading , userr , setLoading,setuser}}>
          {children}
      </DataContext.Provider>
    )
  }

  export default Authcontext