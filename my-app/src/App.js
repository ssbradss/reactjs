import React from 'react';
import Routes from "./routes/index";
import './App.css';
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}

export default App;
