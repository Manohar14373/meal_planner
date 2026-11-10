import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

// DEMO ONLY: users live in localStorage. For a real app, call a server
// (Firebase Auth, Supabase, or your own API with hashed passwords).
const read = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => read("mp_session", null));

  // Signup only creates the account. The person must log in afterwards.
  const signup = ({ name, email, password }) => {
    const users = read("mp_users", []);
    const mail = email.toLowerCase();
    if (users.some((u) => u.email === mail))
      return { ok: false, error: "An account with this email already exists." };
    localStorage.setItem("mp_users", JSON.stringify([...users, { name, email: mail, password }]));
    return { ok: true };
  };

  const login = ({ email, password }) => {
    const found = read("mp_users", []).find(
      (u) => u.email === email.toLowerCase() && u.password === password
    );
    if (!found) return { ok: false, error: "Email or password is incorrect." };
    const session = { name: found.name, email: found.email };
    localStorage.setItem("mp_session", JSON.stringify(session));
    setUser(session);
    return { ok: true };
  };

  const logout = () => {
    localStorage.removeItem("mp_session");
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, signup, login, logout }}>{children}</AuthContext.Provider>;
}
