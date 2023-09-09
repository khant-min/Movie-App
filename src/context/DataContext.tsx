import { createContext, useContext, useEffect, useState, useMemo } from "react";
import axios from "../api/axios";
import { ChildrenProps, MovieProps } from "../types";

const DataContext = createContext<MovieProps | null>(null);

export const DataProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [data, setData] = useState("hello");

  useEffect(() => {
    (async () => {
      const movies = await axios.get(`?page=$1`);
      console.log("all movies", movies);
      setData(JSON.stringify(movies));
    })();
  }, []);

  const value = useMemo(
    () => ({
      data,
    }),
    []
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useAuth = () => useContext(DataContext);
export default DataContext;
