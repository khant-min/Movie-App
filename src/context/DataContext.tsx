import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { ChildrenProps, DataContextProps, MovieDataProps } from "../types";
import axios from "../api/axios";

const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [movies, setMovies] = useState<MovieDataProps[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/");
      setMovies(data.results);
    })();
  }, []);

  const value = useMemo(() => ({ movies }), []);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useAuth = () => useContext(DataContext);
export default DataContext;
