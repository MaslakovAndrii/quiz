import React, { createContext, useContext, useState } from "react";

const DataContext = createContext()

export const DataProvider = ({ children }) => {

     const [data, setDate] = useState({})

     const setValues = (values) => {
          setDate(prevDate => ({
               ...prevDate,
               ...values
          }))
     }
     return (
          <DataContext.Provider value={{ data, setValues }}>
               {children}
          </DataContext.Provider>
     )
}

export const useDate = () => useContext(DataContext)