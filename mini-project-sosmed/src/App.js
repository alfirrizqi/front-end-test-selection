import React from "react";
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./pages/login";
import Register from "./pages/register";
import MainPage from "./pages/mainPage";





function App() {
  
  return (
    <ChakraProvider theme={theme}>
      <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/mainPage" element={<MainPage/>}/>
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;
