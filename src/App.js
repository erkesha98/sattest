import { Login, TodoApp } from "./pages";
import "./App.css";
import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="App">{isAuthenticated ? <TodoApp /> : <Login />}
      
      </div>
    </UserContext.Provider>
  );
}

export default App;
