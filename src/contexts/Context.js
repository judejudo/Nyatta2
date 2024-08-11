import React from 'react'
import Data from '../data/data.json';


export const DataContext = React.createContext();

function UserProvider({children}) {
  return (
    <DataContext.Provider value={ Data}>
      {children}
    </DataContext.Provider>
  )
}
export default UserProvider;