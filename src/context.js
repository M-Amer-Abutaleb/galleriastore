import React, { useContext, useState } from "react"
import useFetch from "./useFetch"


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [userInput, setUserInput] = useState('');
  const [page, setPage] = useState(1)
  const { data, isLoading } = useFetch(userInput, page)


  return (
    <AppContext.Provider value={{isLoading, data, userInput, setUserInput, page, setPage}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };