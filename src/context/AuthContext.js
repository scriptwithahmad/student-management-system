"use client";
import axios from "axios";
import { createContext } from "react";
import { useQuery } from "react-query";

const fetchUser = async () => {
  var res = await axios.get("/api/users/profile");
  return res.data.message;
};

export const AuthContext = createContext();

const Context = ({ children }) => {
  var { data, refetch } = useQuery("session", fetchUser);

  return (
    <AuthContext.Provider value={{ user: data || null, refetch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Context;
