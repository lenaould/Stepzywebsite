import { createContext, useContext, useState } from 'react';
const AuthContext = createContext(null);
const demoUsers = {
  'admin@stepzy.com': { name: 'Stepzy Admin', role: 'admin' },
  'client@stepzy.com': { name: 'Stepzy Client', role: 'client' },
};
export function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('stepzyUser') || 'null'));
  const login = (email) => {
    const nextUser = demoUsers[email] || { name: email.split('@')[0], role: 'client' };
    localStorage.setItem('stepzyUser', JSON.stringify(nextUser));
    setUser(nextUser);
  };
  const logout = () => { localStorage.removeItem('stepzyUser'); setUser(null); };
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
